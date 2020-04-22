const UserModel = require('../Models/users');

const storeLocal = async (request, response, User = UserModel) => {
  try {
    const {
      body: {
        name, email, password, phones, description, keywords,
      },
    } = request;

    const exists = await User.checkUser(email);

    if (exists) {
      return response
        .status(403)
        .json({ message: 'Usuario já cadastrado' })
        .send();
    }

    const user = await User.create({
      name,
      email,
      description,
      keywords,
      password,
      phones,
    });

    return response
      .status(201)
      .json({
        uuid: user.uuid,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        last_login: user.last_login,
        token: user.token,
      })
      .send();
  } catch (error) {
    return response
      .status(500)
      .json({ message: error })
      .send();
  }
};
const showAllLocal = async (request, response, User = UserModel) => {
  try {
    const {
      query: {
        keywords = '', limit = 0, offset = 0, order = 'relevance',
      },
    } = request;
    const keys = keywords === '' ? undefined : Array.from(keywords.split(',') || keywords);

    const users = await User.findForKeywords(keys, limit, offset, order);

    return response.json(users).send();
  } catch (error) {
    return response.json({ error }).send();
  }
};
const showLocal = async (request, response, User = UserModel) => {
  try {
    const { uuid } = request.params;

    const user = await User.findForId(uuid);
    if (!user) {
      return response
        .status(404)
        .json({
          message: 'Não Encontrado',
        })
        .send();
    }

    const [, token] = request.headers.authorization.split(' ');

    if (token !== user.token) {
      return response
        .status(401)
        .json({
          message: 'Não Autorizado',
        })
        .send();
    }

    return response
      .status(200)
      .json(user)
      .send();
  } catch (error) {
    return response
      .status(500)
      .json(error)
      .send();
  }
};

const updateLocal = async (request, response, User) => {
  const [, token] = request.headers.authorization.split(' ');

  try {
    const user = await User.updateOne({ token }, request.body);

    if (user.n === 0) {
      return response
        .status(404)
        .json({ message: 'Usuario nao encontrado' })
        .send();
    }

    return response
      .status(200)
      .json({ user })
      .send();
  } catch (error) {
    return response
      .status(500)
      .json({ error })
      .send();
  }
};

const destroyLocal = async (request, response, User) => {
  const [, token] = request.headers.authorization.split(' ');

  try {
    const user = await User.deleteOne({ token });

    if (user.n === 0) {
      return response
        .status(404)
        .json({ message: 'Usuario nao encontrado' })
        .send();
    }

    return response
      .status(200)
      .json({ user })
      .send();
  } catch (err) {
    return response
      .status(500)
      .json({ err })
      .send();
  }
};

module.exports = {
  store: (request, response) => storeLocal(request, response, UserModel),
  show: (request, response) => showLocal(request, response, UserModel),
  showAll: (request, response) => showAllLocal(request, response, UserModel),
  update: (request, response) => updateLocal(request, response, UserModel),
  destroy: (request, response) => destroyLocal(request, response, UserModel),
  storeLocal,
  showLocal,
  showAllLocal,
  updateLocal,
  destroyLocal,
};

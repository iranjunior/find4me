const UserModel = require('../Models/users');

const storeLocal = async (request, response, User = UserModel) => {
  try {
    const { file } = request;

    const [, token] = request.headers.authorization.split(' ');
    const user = await User.updateOne({ token },
      {
        $push: { files: { key: file.key, name: file.filename, url: file.destination } },
      });

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

module.exports = {
  store: (request, response) => storeLocal(request, response, UserModel),
  storeLocal,
};

const UserModel = require('../Models/users');
const organize = require('../../Utils/organize');

const showLocal = async (request, response, User = UserModel) => {
  try {
    const {
      query: {
        keyword = '',
      },
    } = request;
    let keywords = [];
    keywords = await User.find({ $query: {} }).select(['keywords']);
    keywords = organize(keywords);

    if (keyword.length) {
      keywords = keywords.filter((key) => key.match(new RegExp(keyword, 'i')) !== null);
    }

    return response.json({ keywords }).send();
  } catch (error) {
    return response.json({ error }).send();
  }
};

module.exports = {
  show: (request, response) => showLocal(request, response, UserModel),
  showLocal,
};

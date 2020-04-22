const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./Config/multer');
const auth = require('./App/Middleware/auth');
const UserController = require('./App/Controllers/userController');
const FileController = require('./App/Controllers/fileController');
const KeywordsController = require('./App/Controllers/keywordsController');
const SessionController = require('./App/Controllers/sessionControllers');
const Validate = require('./App/Middleware/validate');

// routes.get('/', (req, res) => res.status(200).send({ message: 'ok' }));
routes.post('/signup', Validate.signUp, UserController.store);
routes.post('/signin', Validate.signIn, SessionController.auth);
routes.get('/keywords', KeywordsController.show);

routes.use(auth);

routes.get('/user', UserController.showAll);
routes.get('/user/:uuid', UserController.show);
routes.put('/user', Validate.update, UserController.update);
routes.delete('/user', UserController.destroy);

routes.post('/file', multer(multerConfig).single('file'), FileController.store);

routes.get('*', (request, response) => response
  .status(404)
  .json({
    message: 'Rota não encontrada',
  })
  .send());
module.exports = routes;

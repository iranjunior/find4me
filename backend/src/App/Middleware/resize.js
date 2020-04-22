const sharp = require('sharp');
const fs = require('fs');

module.exports = async ({ file }, res, next) => {
  const newPath = `${file.filename.split('.')[0]}.webp`;

  await sharp(file.destination)
    .resize(500)
    .toFormat('webp')
    .webp({
      quality: 80,
    })
    .toBuffer()
    .then((data) => {
      // Deletando o arquivo antigo
      // O fs.acess serve para testar se o arquivo realmente existe, evitando bugs
      fs.access(file.destination, (err) => {
        // Um erro significa que a o arquivo não existe, então não tentamos apagar
        if (!err) {
          // Se não houve erros, tentamos apagar
          fs.unlink(file.destination, (err) => {
            // Não quero que erros aqui parem todo o sistema, então só vou imprimir o erro, sem throw.
            if (err) res.json(err).send();
          });
        }
      });

      // Agora vamos armazenar esse buffer no novo caminho
      fs.writeFile(newPath, data, (err) => {
        if (err) {
          // Já aqui um erro significa que o upload falhou, então é importante que o usuário saiba.
          throw err;
        }
      });

      // Se o código chegou até aqui, deu tudo certo, então vamos retornar o novo caminho
      req.file.newPath = newPath;
    });
  return next();
};

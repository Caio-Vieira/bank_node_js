const { request } = require("express");

const { ProfileUseCase  } = require("../useCases/profileUseCase");

class ProfileController {
  exec(request, response) {
    const newProfileclient = request.body;
    const useCase = new ProfileUseCase()
    console.log(newProfileclient);

    if (!newProfileclient.name || !newProfileclient.cpf || !newProfileclient.checkingAccount) {
      console.log("Dados de cadastro incompletos");
      return response.status(400).send("Dados de cadastro incompletos");
    }

    const listClients = useCase.run(newProfileclient)
    return response.status(200).send("Cliente cadastrado com sucesso")
  };

}
module.exports = { ProfileController };





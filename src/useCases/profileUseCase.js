
const { Repository } = require("../repositories/repository");

class ProfileUseCase{
    run(newProfileclient) {
        const repository = new Repository();
        const profileComparison = repository.findByCpfNameAccount(newProfileclient.cpf,
            newProfileclient.name, newProfileclient.checkingAccount);
  
      if (profileComparison) {
        console.log("Dados informados existentes na base!");
        return("Dados informados existentes na base!");
      }
      
       return repository.save(newProfileclient);
      
    }
}
module.exports = { ProfileUseCase }

const profileclients = require("../infra/db/data")


class Repository{
    findByCpfNameAccount(cpf, name, checkingAccount) {
        return profileclients.find(profileclient => profileclient.cpf === cpf || profileclient.name === name || 
               profileclient.checkingAccount === checkingAccount);
        
    }
    save(newProfileclient) {
        const profileclientSize = profileclients.length
        const  lastProfileClient = profileclients[profileclientSize - 1]
        let successorId = lastProfileClient.id
        profileclients.push({id: ++successorId, ...newProfileclient})
        return profileclients
    };
   
}


module.exports = {Repository};

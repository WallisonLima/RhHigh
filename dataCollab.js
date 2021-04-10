

module.exports.dataCollab = async function dataCollab(){
    return new Promise(async (resolve, reject) => {
        let dataCollab = {
            nome: "Pedro",
            cargo: "Tesouro",
            idade: 5,
            cidade: "Nazaré Paulista",
            uf: "SP",
            telefone: null,
            rg: null,
            cpf: null
        }

        resolve(dataCollab)        
    })
    


}






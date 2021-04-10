

module.exports.dataCollab = async function dataCollab(id){
    return new Promise(async (resolve, reject) => {
        let dataCollab = {
            nome: "Wallison",
            cargo: "Programador",
            idade: 21,
            cidade: "Atibaia",
            uf: "SP",
            telefone: 11958293013,
            rg: 591575322,
            cpf: 48490080895
        }
        if(id != undefined){
            resolve(dataCollab.push(id))
        }else{
            resolve(dataCollab)
        }
        
    })
    


}






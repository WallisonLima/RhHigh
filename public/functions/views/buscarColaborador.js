
module.exports.buscarColaborador = async function buscarColaborador(data) {
    return new Promise(async (resolve, reject) => {
        let component = ''
        data.map(element => {
            component += `<div style="margin-left: 10px"'> 
                            <div>Nome: ${element.name}</div><br>
                            <div>CPF: ${element.cpf}</div><br>
                            <div>Email: ${element.email}</div><br>
                            <div>Telefone: ${element.phone}</div><br>
                            <div>Cargo: ${element.occupation}</div><br>
                            <div>Nascimento: ${element.birth}</div><br>
                          </div>`
        });
        resolve(component)

    })
}
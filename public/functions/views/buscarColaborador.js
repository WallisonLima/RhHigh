module.exports.buscarColaborador = async function buscarColaborador(data) {
    return new Promise(async (resolve, reject) => {
        let tr = ''
        data.map(element => {
            tr += `<tr> <td>Nome: ${element.name}</td><br>
                        <td>CPF: ${element.cpf}</td><br>
                        <td>Email: ${element.email}</td><br>
                        <td>Telefone: ${element.phone}</td><br>
                        <td>Cargo: ${element.occupation}</td><br>
                        <td>Nascimento: ${element.birth}</td><br>
                   </tr><br>`
        });
        let component = `<tbody>${tr}</tbody>`
        
        resolve(component)
    
    })
}
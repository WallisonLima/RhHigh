
module.exports.BuscarColaborador = async function BuscarColaborador(data) {
    return new Promise(async (resolve, reject) => {
        let component = []
        data.map(element => {
            component.push(`<tr style="margin-left: 10px"'> 
                            <td>${element.name}</td><br>
                            <td>${element.cpf}</td><br>
                            <td>${element.email}</td><br>
                            <td>${element.phone}</td><br>
                            <td>${element.occupation}</td><br>
                            <td>${element.birth}</td><br>
                            <td>${element.scholarYear}</td><br>
                          </tr>`)
        });
        resolve(component)

    })
}
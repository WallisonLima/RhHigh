

module.exports.dataCollab = async function dataCollab({body}) {
    return new Promise(async (resolve, reject) => {
        console.log(body)
        let data = {}
        if (body.scholarYear == undefined) {
            data ={
                name: body.name,
                email: body.email,
                phone: body.phone,
                occupation: body.occupation,
                birth: body.birth
            }
        }
        else {
            data ={
                name: body.name,
                cpf: body.cpf,
                email: body.email,
                phone: body.phone,
                occupation: body.occupation,
                birth: body.birth,
                scholarYear: body.scholarYear
            }
        }
        resolve(data)
    })
}






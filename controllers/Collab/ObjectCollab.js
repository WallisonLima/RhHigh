

module.exports.dataCollab = async function dataCollab(req) {
    return new Promise(async (resolve, reject) => {
        let data = {}
        if (req.body.scholarYear == undefined) {
            data ={
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                occupation: req.body.occupation,
                birth: req.body.birth
            }
        }
        else {
            data ={
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                occupation: req.body.occupation,
                birth: req.body.birth,
                scholarYear: req.body.scholarYear
            }
        }
        resolve(data)
    })
}






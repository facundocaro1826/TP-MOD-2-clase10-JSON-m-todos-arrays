const fs = require('fs')

const leerJson =()=>{
    const viciJson = fs.readFileSync('./bicicletas.json')
    const vicijs = JSON.parse(viciJson)
    return vicijs
}

module.exports = {
    leerJson
}
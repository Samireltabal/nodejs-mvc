const {readFileSync} = require('fs')
const obj = readFileSync('./data/products.json', 'utf-8')
const data = JSON.parse(obj)

const get = () => {
    return data;
}

const find = (id) => {
    const singleProduct = data.products.find((p) => p.id === Number(id))
    return singleProduct
}

module.exports = { get , find }
const { get,find } = require('../../Models/Product')
const index = (req,res) => {
    const data = get()
    res.json(data.products)
}

const show = (req,res) => {
    const itemId = req.params.id
    const item = find(itemId)
    res.json(item)
}

module.exports = { index, show }
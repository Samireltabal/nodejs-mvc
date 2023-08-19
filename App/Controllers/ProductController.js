const { get,find } = require('../Models/Product')
const index = (req,res) => {
    const data = get()
    res.render(
        'products',
        { title: 'PUG with Express', message: 'Hello from educative!', products: data.products}
    );
}

const show = (req,res) => {
    const itemId = req.params.id
    const item = find(itemId)
    res.render(
        'singleProduct',
        { item: item, id: itemId}
    )
}

module.exports = { index, show }
const { get,find } = require('../../Models/Movie')
const index = (req,res) => {
    const data = get().then((data) => {
        res.json(data)
    }).catch((err) => {
        console.log(err)
    })
}

const show = (req,res) => {
    find(req.params.id).then((data) => {
        res.json(data)
    }).catch((err) => {
        res.json('resource not found')
    })
}

module.exports = { index, show }
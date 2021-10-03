const { Router } = require('express')
const { getIconsByIndex, searchIcons, importIcon } = require('./lib')

const iconsApi = Router();

iconsApi.get('/', (req, res) => {
    const { index, query } = req.query;
    const i = Number.isNaN(Number(index)) ? 0 : Number(index);
    if (query) {
        res.json(searchIcons(query, i))
    } else {   
        res.json(getIconsByIndex(i))
    }
})

iconsApi.post('/', (req, res) => {
    res.json(importIcon(req.query.icon))
})


module.exports = iconsApi;
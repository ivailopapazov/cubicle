const uniqid = require('uniqid');
const Cube = require('../models/Cube');
const fs = require('fs');
const path = require('path');

let productsData = require('../config/products.json');

function getAll() {
    return productsData;
}

function create(data) {
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    );

    productsData.push(cube);

    fs.writeFile(__dirname + '/../config/products.json', JSON.stringify(productsData), (err) => {
        if (err) {
            console.log(err);
            return;
        }
    });
}

module.exports = {
    getAll,
    create,
}
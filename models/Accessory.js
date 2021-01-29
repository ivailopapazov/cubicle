const mongoose = require('mongoose');

const accessoryScheme = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: String,
    imageUrl: String,
    description: String,
});

module.exports = mongoose.model('Accessory', accessoryScheme);
const Model = require('./Model');

class Cube extends Model {
    constructor(id, name, description, imageUrl, level) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.level = level;
    }
}

module.exports = Cube;
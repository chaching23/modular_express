const sharks = require('./../controllers/sharks');

module.exports = (app) => {
    app.get("/", sharks.index)
};
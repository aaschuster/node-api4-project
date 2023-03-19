const data = require("./data.json");

function get() {
    return Promise.resolve(data);
}

module.exports = 
{
    get
};
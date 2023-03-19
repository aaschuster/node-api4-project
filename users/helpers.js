const data = require("./data.json");

function get() {
    return Promise.resolve(data);
}

function register( {username, password} ) {
    const newUser = {username, password};
    data.push(newUser);
    return Promise.resolve(newUser);
}

module.exports = 
{
    get,
    register
};
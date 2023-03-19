const data = require("./data.json");

function get() {
    return Promise.resolve(data);
}

function register( {username, password} ) {
    const newUser = {username, password};
    data.push(newUser);
    return Promise.resolve(newUser);
}

function login( {username, password} ) {
    const user = data.find( user => user.username === username);

    const failMessage = {message: "Username or password not valid."};
    const successMessage = {message: `Login successful. Welcome ${username}`};

    if(!user || !user.password || user.password !== password) return Promise.resolve(failMessage);
    return Promise.resolve(successMessage);
}

module.exports = 
{
    get,
    register,
    login
};
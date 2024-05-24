const url = require("url")

const createUser = require('./createUser')
const getUser = require('./getUser')
const deleteUser = require('./deleteUser')
const updateUser = require('./updateUser')
const listUsers = require('./listUsers')



const userRoutes = (req, res) => {
    const parseUrl = url.parse(req.url, true);
    const method = req.method;
    const path = parseUrl.pathname;

    res.setHeader('Content-type', 'application/json')

    if (path === '/users' && method === 'GET') {
        listUsers(req, res);
    } else if (path === '/users' && method === 'POST') {
        createUser(req, res);
    } else if (path.startsWith('/users/') && method === 'GET') {
        getUser(req, res);
    } else if (path.startsWith('/users/') && method === 'PUT') {
        updateUser(req, res);
    } else if (path.startsWith('/users/') && method === 'DELETE') {
        deleteUser(req, res)
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Router not found" }));
    }
};

module.exports = userRoutes;
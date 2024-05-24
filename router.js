const url = require('url');

// Импорт обработки маршрутов
const userRoutes = require('./userRoutes/userRoutes')

// Функция для обратки запросов 
const routeHandler = (req, res) => {
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;

    if (path === '/users' || path === '/users/') {
        userRoutes(req, res)
    } else {
        res.setHeader('Content-type', 'application/json');
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Error, not found' }));
    }
};

module.exports = routeHandler;




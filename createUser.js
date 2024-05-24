const data = require('../sql3-data');


module.exports = (req, res) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', async () => {
        const parseBody = new URLSearchParams(body);
        const name = parseBody.get('name');
        const age = parseBody.get('age');

        if (name && age) {
            const user = { name, age: parseInt(age) };
            const createdUser = await data.addUser(user);
            data.addUser(user);
            res.writeHead(201);
            res.end(JSON.stringify(createdUser));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ message: "Name and age are required" }))
        }
    });

};


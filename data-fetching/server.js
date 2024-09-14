const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
    console.log("Request received");
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        "Access-Control-Allow-Headers",
        "GET, POST, PUT, DELETE, OPTIONS, PATCH"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

server.use(router);

server.listen(3001, () => {
    console.log('JSON Server is running');
});
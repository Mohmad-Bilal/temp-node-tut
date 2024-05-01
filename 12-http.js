const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our home page");
        return;
    }
    if (req.url === "/about") {
        res.end("here s our short history");
        return;
    }

    res.end('<h1>Ooops!</h1> <p>somthing goes wrong</p> <a href="/"> back home<a>');
});

server.listen(5501);


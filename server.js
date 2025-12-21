import http from "node:http"

const PORT = 8000

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.statusCode = 200
    res.end("<html><h1>Hello this is my first server message</h1></html>")
} )

server.listen(PORT, () => console.log("Hurrayyy"))
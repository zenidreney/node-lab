import http from "node:http";
import { serveStatic } from "./utils/serveStatic.js";

const PORT = 5000;

const __dirname = import.meta.dirname;

// console.log("Cwd: ", process.cwd(), import.meta.dirname)

const server = http.createServer(async (req, res) => {
	await serveStatic(req, res, __dirname);

	// console.log(pathToResource);

	/* res.setHeader("Content-Type", "text/html");
	res.statusCode = 200;
	res.end(content); */
});

server.listen(PORT, () => console.log("Hurrayyy"));

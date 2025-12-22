import http from "node:http";
//import { getData } from "./utils/getData.js";
import { serveStatic } from "./utils/serveStatic.js";
import { handleGet } from "./handlers/routeHandlers.js";

const PORT = 8000;

const __dirname = import.meta.dirname;

// console.log("Cwd: ", process.cwd(), import.meta.dirname)

//console.log(await getData());

const server = http.createServer(async (req, res) => {
	 console.log("REQUEST:", req.url.startsWith("/api"))

	if(req.url.startsWith("/api")) {
		if(req.method === "GET") {
			return await handleGet(res)
		}
	}

	else if (!req.url.startsWith("/api")) {
		return await serveStatic(req, res, __dirname);
	}
});

server.listen(PORT, () => console.log("Hurrayyy"));

import fs from "node:fs/promises";
import path from "node:path";
import { getContentType } from "./getContentType.js";
import { sendResponse } from "./sendResponse.js";
export async function serveStatic(req, res, baseDir) {
	const publicDir = path.join(baseDir, "public");
	const filePath = path.join(
		publicDir,
		req.url === "/" ? "index.html" : req.url,
	);
	/* 
	console.log(
		"Public Dir",
		publicDir,
		"filepath",
		filePath,
		"req.url",
		req.url
	); */
	try {
		const content = await fs.readFile(filePath);
		const ext = path.extname(filePath);
		console.log(ext);
		const contentType = getContentType(ext);

		console.log(contentType);
		sendResponse(res, 200, contentType, content);
	} catch (err) {
		console.log(err.code);
		if (err.code === "ENOENT") {
			console.log("eno yo");
			const content = await fs.readFile(path.join(publicDir, "404.html"));
			// const ext = path.extname("/home/zenid/node-lab/public/404.html");
			// console.log(ext);
			// const contentType = getContentType(ext);

			// console.log(contentType);
			sendResponse(res, 404, "text/html", content);
		} else {
            sendResponse(res, 500, "text/html", `<html><h1>Server Error: ${err.code}</h1></html>`)
        }
	}
}

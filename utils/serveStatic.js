import fs from "node:fs/promises";
import path from "node:path"
import { sendResponse } from "./sendResponse.js";


export async function serveStatic(res, baseDir) {
    const filePath = path.join(baseDir, "public", "index.html")
    console.log("filepath", filePath)
    try {
        const content = await fs.readFile(filePath)
        sendResponse(res, 200, "text/html", content)
    } catch(err) {
        console.log(err)
    }

}
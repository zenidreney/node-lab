import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { addNewSighting } from "../utils/addNewSighting.js";
import { sanitizeInput } from "../utils/sanitizeInput.js";
import { sightingEvents } from "../events/sightingEvents.js";
// console.log(addNewSighting)


export async function handleGet(res) {
    // console.log("I am handle get", res);
	const data = await getData();
	const content = JSON.stringify(data);
	sendResponse(res, 200, "application/json", content);
}

export async function handlePost(req, res) {
	console.log("POST Request received");


	try {
        const parsedBody = await parseJSONBody(req);
        const sanitizedBody = sanitizeInput(parsedBody)

        await addNewSighting(sanitizedBody)
        sightingEvents.emit("sighting-added", sanitizedBody)
        sendResponse(res, 201, "applications/json", JSON.stringify(sanitizedBody))
            // console.log(parsedBody)
    } catch (error) {
        sendResponse(res, 400, "application/json", JSON.stringify({err: error}))
    }

}

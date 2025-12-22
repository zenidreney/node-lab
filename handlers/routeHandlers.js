import { getData } from "../utils/getData.js"
import { sendResponse } from "../utils/sendResponse.js"
console.log(getData)

export async function handleGet(res) {
    console.log("I am handle get", res)
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res, 200, "application/json", content)
}
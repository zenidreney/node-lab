import { getData } from "../utils/getData.js"
import { sendResponse } from "../utils/sendResponse.js"

console.log(getData)

export async function handleGet(res) {
    console.log("I am handle get", res)
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res, 200, "application/json", content)
}

export async function handlePost(req, res) {
    // console.log("POST Request received")
    let body = ""
    
    
    for await (const chunk of req) {
        body += chunk
    }

    try {
        const eMailObj = JSON.parse(body)
        // console.log(eMailObj)
        res.statusCode = 201
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify(eMailObj))
    } catch (error) {
        console.log("Invalid JSON: ", error)   
    }
}
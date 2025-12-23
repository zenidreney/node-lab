export async function parseJSONBody(req) {
    console.log("I am PARSE")
    let body = ""
    
    
    for await (const chunk of req) {
        body += chunk
    }

    try {
        const postObj = JSON.parse(body)
        // console.log(eMailObj)
        return postObj
    } catch (error) {
        console.log("Invalid JSON: ", error)   
        throw new Error("Invalid JSON: ", error)
    }
}
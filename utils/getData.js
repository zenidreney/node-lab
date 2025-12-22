import fs from "node:fs/promises"
import path from "node:path"

export async function getData(){

  try {
      const pathJson = path.join("data", "data.json")
      //console.log(pathJson)
      const data = await fs.readFile(pathJson, "utf-8")
      // console.log(data)
      const parsedData = JSON.parse(data)
      // console.log(parsedData)
  
      return parsedData
  } catch (error) {
        console.log(error)
    return []
  }
}
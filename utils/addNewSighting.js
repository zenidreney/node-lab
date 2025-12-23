import fs from "node:fs/promises";
import path from "node:path";
import { getData } from "./getData.js"

export async function addNewSighting(newSighting) {
    console.log("I am ADD NEW SIGHT")

    const sightings = await getData()
    sightings.push(newSighting)
    console.log(sightings)
    const pathJson = path.join("data", "data.json")
    // console.log(pathJson)
    await fs.writeFile(pathJson, JSON.stringify(sightings, null, 2), "utf-8")
}
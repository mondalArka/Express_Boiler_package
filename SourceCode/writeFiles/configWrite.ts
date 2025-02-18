import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class configWriting {
    public static async mongoDBWriting(dirName: string): Promise<void> {
            let reading = await readFile(path.join(__dirname, "../", "templates", "ConfigWrite", "MongoConfig.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/config/dbConfig.js`, reading)
    }
}


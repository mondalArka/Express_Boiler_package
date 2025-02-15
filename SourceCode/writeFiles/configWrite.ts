import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class configWriting {
    public static async mongoDBWriting(dirName: string): Promise<void> {
        try {
            let reading = await readFile(path.join(__dirname, "../", "templates", "ConfigWrite", "MongoConfig.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/config/dbConfig.js`, reading)
            console.log("Finished writing dbConfig.js");
        } catch (err) {
            console.log("Error in writing dbConfig file!", err);
        }
    }

    //not needed since using prisma
    // public static async mysqlDBWriting(): Promise<void> {
    //     try {
    //         let reading = await readFile(process.cwd() + "/SourceCode/writeFiles/ConfigWrite/MySqlConfig.js")
    //         let index = await writeFile(process.cwd() + "/Express-App/src/config/dbConfig.js", reading)
    //         console.log("Finished writing dbConfig.js");
    //     } catch (err) {
    //         console.log("Error in writing dbConfig file!", err);
    //     }
    // }
}


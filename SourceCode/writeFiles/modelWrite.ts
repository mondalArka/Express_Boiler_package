import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class modelWriting {
    public static async mongoModelWriting(dirName: string): Promise<void> {
        try {
            let reading = await readFile(path.join(__dirname, "../", "templates", "ModelWrite", "MongoModelContent.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/models/user.js`, reading)
            console.log("Finished writing user.js");
        } catch (err) {
            console.log("Error in writing user file!", err);
        }
    }

    // public static async mysqlModelWriting(): Promise<void> {
    //     try {
    //         let reading = await readFile(process.cwd() + "/SourceCode/writeFiles/ModelWrite/MySqlEntity.js")
    //         let index = await writeFile(process.cwd() + "/Express-App/src/models/user.js", reading)
    //         console.log("Finished writing user.js");
    //     } catch (err) {
    //         console.log("Error in writing user file!", err);
    //     }
    // }
}


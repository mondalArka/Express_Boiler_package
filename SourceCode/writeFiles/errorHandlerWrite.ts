import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class errorHandlerWriting {
    public static async writing(dirName:string): Promise<void> {
        try {
            let reading = await readFile(path.join(__dirname, "../", "templates", "errorHandlers", "errorHandlersContent.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/utils/error-callback.js`, reading)
            console.log("Finished writing error-callback.js");
        } catch (err) {
            console.log("Error in writing error-callback file!", err);
        }
    }

    public static async writingSql(dirName:string): Promise<void> {
        try {
            let reading = await readFile(path.join(__dirname, "../", "templates", "errorHandlers", "errorHandlersContentTS.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/utils/error-callback.ts`, reading)
            console.log("Finished writing error-callback.ts");
        } catch (err) {
            console.log("Error in writing error-callback file!", err);
        }
    }
}


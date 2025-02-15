import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class promiseWriting {
    public static async writing(dirName:string): Promise<void> {
        try {
            let reading = await readFile(path.join(__dirname,"../","templates","PromiseHandleWrite","PromiseContent.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/utils/asyncHandler.js`, reading)
            console.log("Finished writing PromiseContent.js");
        } catch (err) {
            console.log("Error in writing PromiseContent file!", err);
        }
    }

    public static async writingSql(dirName:string): Promise<void> {
        try {
            let reading = await readFile(path.join(__dirname,"../","templates","PromiseHandleWrite","PromiseContentTS.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/utils/asyncHandler.ts`, reading)
            console.log("Finished writing PromiseContentJWT.ts");
        } catch (err) {
            console.log("Error in writing PromiseContentJWT file!", err);
        }
    }
}


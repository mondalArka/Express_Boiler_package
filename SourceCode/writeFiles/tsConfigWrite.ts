import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class tsConfigWriting {
    public static async tsConfigWriting(dirName:string): Promise<void> {
        try {
            let reading = await readFile(path.join(__dirname,"../","templates","TsConfigWrite","TSConfig.json"))
            let index = await writeFile(process.cwd() + `/${dirName}/tsconfig.json`, reading)
            console.log("Finished writing tsconfig.json");
        } catch (err) {
            console.log("Error in writing tsconfig file!", err);
        }
    }
}
import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class indexWriting {
    public static async interfaceWriting(dirName:string): Promise<void> {
        try {
            let reading = await readFile(path.join(__dirname,"../","templates","InterfaceWrite","interface.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/utils/interfaces.ts`, reading)
            console.log("Finished writing interfaces.ts");
        } catch (err) {
            console.log("Error in writing interfaces file!", err);
        }
    }
}
import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class indexWriting {
    public static async interfaceWriting(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","InterfaceWrite","interface.txt"))
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/utils/interfaces.ts`, reading)
    }
}
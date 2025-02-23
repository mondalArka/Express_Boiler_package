import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class interfaces {
    public static async interfaceWriting(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","InterfaceWrite","interface.txt"))
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/utils/interfaces.ts`, reading)
    }

    public static async interfaceWritingNoJWT(dirName:string): Promise<void> {
        let reading: Buffer = await readFile(path.join(__dirname,"../","templates","InterfaceWrite","interface.txt"))
        let str: string= reading.toString("utf-8");
        str= str.replace(`
export interface Decoded{
    id:number,
    email:string,
    createdAt:Date
}`,``)
        let index: void = await writeFile(process.cwd() + `/${dirName}/src/utils/interfaces.ts`, str)
}
}
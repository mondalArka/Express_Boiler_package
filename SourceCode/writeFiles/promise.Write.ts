import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class promiseWriting {
    public static async writing(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","PromiseHandleWrite","PromiseContent.txt"))
            let index:void = await writeFile(process.cwd() + `/${dirName}/src/utils/asyncHandler.js`, reading)
    }

    public static async writingSql(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","PromiseHandleWrite","PromiseContentTS.txt"))
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/utils/asyncHandler.ts`, reading)
    }
}


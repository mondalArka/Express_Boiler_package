import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class errorHandlerWriting {
    public static async writing(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname, "../", "templates", "errorHandlers", "errorHandlersContent.txt"))
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/utils/error-callback.js`, reading)
    }

    public static async writingSql(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname, "../", "templates", "errorHandlers", "errorHandlersContentTS.txt"))
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/utils/error-callback.ts`, reading)
    }
}


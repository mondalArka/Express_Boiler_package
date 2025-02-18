import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class authWriting {
    public static async AuthWriting(dirName:string): Promise<void> {
            let reading = await readFile(path.join(__dirname, "../", "templates", "AuthMiddleware", "authMiddlewareContent.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/middleware/authValidation.js`, reading)
    }

    public static async AuthWritingSql(dirName:String): Promise<void> {
            let reading = await readFile(path.join(__dirname, "../", "templates", "AuthMiddleware", "authMiddlewareContentTS.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/middleware/authValidation.ts`, reading)
    }
}


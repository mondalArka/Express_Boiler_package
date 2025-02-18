import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class jwtWriting {
    public static async jwtMongoWriting(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","JWTWrite","jwtContent.txt"))
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/utils/jwt.js`, reading)
    }

    public static async jwtSqlWriting(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(process.cwd() + "/SourceCode/templates/JWTWrite/jwtContentTS.txt")
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/utils/jwt.ts`, reading)
    }
}
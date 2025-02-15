import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class jwtWriting {
    public static async jwtMongoWriting(dirName:string): Promise<void> {
        try {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","JWTWrite","jwtContent.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/utils/jwt.js`, reading)
            console.log("Finished writing jwt.js");
        } catch (err) {
            console.log("Error in writing jwt file!", err);
        }
    }

    public static async jwtSqlWriting(dirName:string): Promise<void> {
        try {
            let reading: Buffer = await readFile(process.cwd() + "/SourceCode/templates/JWTWrite/jwtContentTS.txt")
            let index = await writeFile(process.cwd() + `/${dirName}/src/utils/jwt.ts`, reading)
            console.log("Finished writing jwt.ts");
        } catch (err) {
            console.log("Error in writing jwt file!", err);
        }
    }
}
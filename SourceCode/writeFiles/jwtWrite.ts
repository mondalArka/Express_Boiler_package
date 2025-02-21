import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class jwtWriting {
    public static async jwtMongoWriting(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","JWTWrite","jwtContent.txt"))
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/utils/jwt.js`, reading)
    }

    public static async jwtSqlWritingTypeorm(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../", "templates","JWTWrite","jwtContentTS.txt"));
            let str: string= reading.toString("utf-8");
            str= str.replace(`import prisma from "./hashing"`,"");
            str= str.replace(`User.findUnique({ where: { id: Number(decode.id) }});`,`User.findOne({ where: { id: Number(decode.id)  }});`)
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/utils/jwt.ts`, str)
    }

    public static async jwtSqlWritingPrisma(dirName:string): Promise<void> {
        let reading: Buffer = await readFile(path.join(__dirname,"../", "templates","JWTWrite","jwtContentTS.txt"));
        let str: string= reading.toString("utf-8");
        str=str.replace(`import User from "../Entity/User";`,`import prisma from "../utils/hashing";`);
        str= str.replace(`User.findUnique({ where: { id: Number(decode.id) }});`,`prisma.user.findUnique({ where: { id: Number(decode.id) }});`);
        let index: void = await writeFile(process.cwd() + `/${dirName}/src/utils/jwt.ts`, str)
        }
}
import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class prismaHashWrite {
    public static async PrismaHashWriting(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","PrismaHashing","prismahash.txt"))
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/utils/hashing.ts`, reading)
    }
}
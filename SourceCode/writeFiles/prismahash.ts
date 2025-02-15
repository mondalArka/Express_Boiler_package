import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class prismaHashWrite {
    public static async PrismaHashWriting(dirName:string): Promise<void> {
        try {
            let reading = await readFile(path.join(__dirname,"../","templates","PrismaHashing","prismahash.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/utils/hashing.ts`, reading)
            console.log("Finished writing hash.ts");
        } catch (err) {
            console.log("Error in writing hash file!", err);
        }
    }
}
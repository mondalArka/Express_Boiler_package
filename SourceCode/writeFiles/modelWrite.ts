import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class modelWriting {
    public static async mongoModelWriting(dirName: string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname, "../", "templates", "ModelWrite", "MongoModelContent.txt"))
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/models/user.js`, reading)
    }
}


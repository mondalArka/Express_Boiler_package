import { writeFile, readFile, open, FileHandle, appendFile } from "fs/promises";
import * as path from "path";
export default class envWriting {
    public static async EnvMongoWriting(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname, "../", "templates", "EnvWrite", "envContent.txt"))
            let str: string = reading.toString("utf-8");
            str = str.replace(`AUTH_SECRET=your_jwt_secret`, "")
            let index = await writeFile(process.cwd() + `/${dirName}/.env`, str)
    }

    public static async EnvMongoWritingJWT(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname, "../", "templates", "EnvWrite", "envContent.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/.env`, reading)
    }

    public static async EnvMySqlWritingJWT(dirName:string): Promise<void> {
            let reading: FileHandle = await open(path.join(__dirname,"../","templates","EnvWrite","envType.txt"))
            let index = await appendFile(process.cwd() + `/${dirName}/.env`, `\nAUTH_SECRET=your_jwt_secret\nPORT=2000`, "utf-8")
            reading.close();
    }

    public static async EnvMySqlWritingTypeJWt(dirName:string): Promise<void> {
        let reading: Buffer = await readFile(path.join(__dirname,"../","templates","EnvWrite","envType.txt"))
        await writeFile(process.cwd() + `/${dirName}/.env`,reading)
        }

public static async EnvMySqlWritingType(dirName:string): Promise<void> {
        let reading: Buffer = await readFile(path.join(__dirname,"../","templates","EnvWrite","envType.txt"))
        let str :string =reading.toString("utf-8");
        str= str.replace(`AUTH_SECRET=your_jwt_secret`,"");
        await writeFile(process.cwd() + `/${dirName}/.env`,str)
        }
}


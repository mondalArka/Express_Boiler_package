import { writeFile, readFile, open, FileHandle, appendFile } from "fs/promises";
import * as path from "path";
export default class envWriting {
    public static async EnvMongoWriting(dirName:string): Promise<void> {
        try {
            let reading: Buffer = await readFile(path.join(__dirname, "../", "templates", "EnvWrite", "envContent.txt"))
            let str: string = reading.toString("utf-8");
            str = str.replace(`AUTH_SECRET=your_jwt_secret`, "")
            let index = await writeFile(process.cwd() + `/${dirName}/.env`, str)
            console.log("Finished writing .env file");
        } catch (err) {
            console.log("Error in writing .env file!", err);
        }
    }

    public static async EnvMongoWritingJWT(dirName:string): Promise<void> {
        try {
            let reading: Buffer = await readFile(path.join(__dirname, "../", "templates", "EnvWrite", "envContent.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/.env`, reading)
            console.log("Finished writing .env file");
        } catch (err) {
            console.log("Error in writing .env file!", err);
        }
    }

    public static async EnvMySqlWritingJWT(dirName:string): Promise<void> {
        try {
            let reading: FileHandle = await open(process.cwd() + `/${dirName}/.env`, "a")
            // let str: string = reading.toString();
            // str = str.replace(`DB_URL=mongodb://localhost:27017/express-app`, "")
            let index = await appendFile(process.cwd() + `/${dirName}/.env`, `\nAUTH_SECRET=your_jwt_secret`, "utf-8")
            console.log("Finished writing .env file");
            reading.close();
        } catch (err) {
            console.log("Error in writing .env file!", err);
        }
    }

    // public static async EnvMySqlWriting(): Promise<void> {
    //     try {
    //         let reading: FileHandle = await open(process.cwd() + "/Express-App/.env","a")
    //         // let str: string = reading.toString();
    //         // str = str.replace(`DB_URL=mongodb://localhost:27017/express-app`, "")
    //         let index = await appendFile(process.cwd() + "/Express-App/.env", `\nAUTH_SECRET=your_jwt_secret`,"utf-8")
    //         console.log("Finished writing .env file");
    //     } catch (err) {
    //         console.log("Error in writing .env file!", err);
    //     }
    // }
}


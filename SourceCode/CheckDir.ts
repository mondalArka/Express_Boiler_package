import { existsSync } from "fs";
import { TakeInput } from "./exports";

class checkDir {
    public static async checkDirExists(dirName: string): Promise<number> {
        try {
            if (existsSync(process.cwd() + `/${dirName}`)) {
                if(dirName.trim() == ""){
                    console.log(`\x1b[31mPlease provide a directory name!\x1b[0m`);
                    return Promise.resolve(1);
                }
                console.log(`\x1b[31mDirectory already exists with name ${dirName}.Please try again!\x1b[0m`);
                return Promise.resolve(1);
            }
            return Promise.resolve(0);
        } catch (err) {
            console.log(`\x1b[31m${err}\x1b[0m`);
            process.exit(1);
        }
    }

    public static async noName(): Promise<string> {
        let dirName: string;
        dirName = await TakeInput.DirName();
        return Promise.resolve(dirName);
    }
}

export default checkDir
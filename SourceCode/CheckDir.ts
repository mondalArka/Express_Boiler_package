import { existsSync } from "fs";

class checkDir {
    public static checkDirExists(dirName:string): void {
        try {
            if (existsSync(process.cwd() + `/ExpressJs`)) {
                console.log(`Directory with name "ExpressJs" already exists. Please remove it or change directory name!`);
                process.exit(1);
            }
        } catch (err) {
            console.log(err);
            throw err
        }
    }
}

export default checkDir
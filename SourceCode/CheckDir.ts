import { existsSync } from "fs";

class checkDir {
    public static checkDirExists(dirName:string): void {
        try {
            if (existsSync(process.cwd() + `/ExpressJs`)) {
                console.log(`\x1b[31mDirectory with name "ExpressJs" already exists. Please remove it or change directory name!\x1b[0m`);
                process.exit(1);
            }
        } catch (err) {
            console.log(`\x1b[31m${err}\x1b[0m`);
            process.exit(1);
        }
    }
}

export default checkDir
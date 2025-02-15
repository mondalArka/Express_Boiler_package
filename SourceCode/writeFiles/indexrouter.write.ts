import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class indexRouterWriting {
    public static async writing(dirName:string): Promise<void> {
        try {
            let reading = await readFile(path.join(__dirname, "../", "templates", "Index.Routes.Write", "indexrouterContent.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/routes/index.route.js`, reading)
            console.log("Finished writing index.route.js");
        } catch (err) {
            console.log("Error in writing index.route file!", err);
        }
    }

    public static async writingSql(dirName:string): Promise<void> {
        try {
            let reading = await readFile(path.join(__dirname, "../", "templates", "Index.Routes.Write", "indexrouterContentTS.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/routes/index.route.ts`, reading)
            console.log("Finished writing index.route.ts");
        } catch (err) {
            console.log("Error in writing index.route file!", err);
        }
    }
}


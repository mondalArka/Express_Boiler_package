import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class apiRouterWriting {
    public static async writing(dirName:string): Promise<void> {
        try {
            let reading = await readFile(path.join(__dirname, "../", "templates", "Api.Routes.Write", "api.Routes.Content.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/routes/apiRoutes.js`, reading)
            console.log("Finished writing apiRoutes.js");
        } catch (err) {
            console.log("Error in writing apiRoutes file!", err);
        }
    }

    public static async writingSql(dirName:string): Promise<void> {
        try {
            let reading = await readFile(path.join(__dirname, "../", "templates", "Api.Routes.Write", "api.Routes.ContentTS.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/routes/apiRoutes.ts`, reading)
            console.log("Finished writing apiRoutes.ts");
        } catch (err) {
            console.log("Error in writing apiRoutes file!", err);
        }
    }
}


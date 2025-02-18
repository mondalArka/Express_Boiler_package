import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class indexRouterWriting {
    public static async writing(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname, "../", "templates", "Index.Routes.Write", "indexrouterContent.txt"))
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/routes/index.route.js`, reading)
    }

    public static async writingSql(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname, "../", "templates", "Index.Routes.Write", "indexrouterContentTS.txt"))
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/routes/index.route.ts`, reading)
    }
}


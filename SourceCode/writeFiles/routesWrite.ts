import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class routesWriting {
    public static async writing(dirName:string): Promise<void> {
        try {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","RoutesWrite","routesContent.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/routes/initialRoutes.js`, reading)

            console.log("Finished writing initialRoutes.js");
        } catch (err) {
            console.log("Error in writing initialRoutes file!", err);
        }
    }

    public static async writingJWT(dirName:string): Promise<void> {
        try {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","RoutesWrite","routesContentJWT.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/routes/initialRoutes.js`, reading)

            console.log("Finished writing initialRoutes.js");
        } catch (err) {
            console.log("Error in writing initialRoutes file!", err);
        }
    }

    public static async writingSql(dirName:string): Promise<void> {
        try {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","RoutesWrite","routesContentTS.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/routes/initialRoutes.ts`, reading)

            console.log("Finished writing initialRoutes.ts");
        } catch (err) {
            console.log("Error in writing initialRoutes file!", err);
        }
    }

    public static async writingSqlJWT(dirName:string): Promise<void> {
        try {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","RoutesWrite","routesContentTS.txt"))
            let str: string = reading.toString("utf-8");
            str = str.replace(`import asyncHandler from "../utils/asyncHandler";`, `import authentication from "../middleware/authValidation";\nimport asyncHandler from "../utils/asyncHandler";`)
            str= str.replace(`initialRouter.post("/register", asyncHandler(initialController.registration));`,
                `initialRouter.post("/register", asyncHandler(initialController.registration));\ninitialRouter.post("/login", asyncHandler(initialController.login));\ninitialRouter.use(asyncHandler(authentication.authCheck))`
            )
            str=str.replace(`initialRouter.get("/:id", asyncHandler(initialController.viewUser));`,`initialRouter.get("/", asyncHandler(initialController.viewUser));`)
            let index = await writeFile(process.cwd() + `/${dirName}/src/routes/initialRoutes.t`, str)
            console.log("Finished writing initialRoutes.ts");
        } catch (err) {
            console.log("Error in writing initialRoutes file!", err);
        }
    }
}


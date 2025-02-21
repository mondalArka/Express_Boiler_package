import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class routesWriting {
    public static async writing(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","RoutesWrite","routesContent.txt"))
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/routes/initialRoutes.js`, reading)
    }

    public static async writingJWT(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","RoutesWrite","routesContentJWT.txt"))
            let str: string = reading.toString("utf-8");
            str= str.replace(`const { registerValidation } = require("../validators/authValidation")`,"");
            str= str.replace(`initialRouter.post("/register", asyncHandler(registerValidation), asyncHandler(initialController.registration))
initialRouter.post("/login",asyncHandler(LoginValidation), asyncHandler(initialController.login))`,`initialRouter.post("/register", asyncHandler(initialController.registration))
initialRouter.post("/login", asyncHandler(initialController.login))`)
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/routes/initialRoutes.js`, str)
    }

    public static async writingReqVal(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","RoutesWrite","routesContent.txt"))
            let str: string = reading.toString("utf-8");
            str= str.replace(`const { asyncHandler } = require("../utils/asyncHandler")`,`const { asyncHandler } = require("../utils/asyncHandler")
const { registerValidation } = require("../validators/authValidation")`);
            str= str.replace(`initialRouter.post("/register", asyncHandler(initialController.registration))
initialRouter.get("/:id", asyncHandler(initialController.viewUser))`,`initialRouter.post("/register",asyncHandler(registerValidation), asyncHandler(initialController.registration))\ninitialRouter.get("/:id", asyncHandler(initialController.viewUser))`)
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/routes/initialRoutes.js`, str)
    }

    public static async writingJWTReqVal(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","RoutesWrite","routesContentJWT.txt"))
            let str: string = reading.toString("utf-8");
            str= str.replace(`const authentication = require("../middleware/authValidation");`,`const authentication = require("../middleware/authValidation");\nconst { registerValidation, loginValidation } = require("../validators/authValidation")`);
            str= str.replace(`initialRouter.post("/register", asyncHandler(registerValidation), asyncHandler(initialController.registration))
initialRouter.post("/login",asyncHandler(LoginValidation), asyncHandler(initialController.login))`,`initialRouter.post("/register", asyncHandler(registerValidation), asyncHandler(initialController.registration))
initialRouter.post("/login",asyncHandler(loginValidation), asyncHandler(initialController.login));`)

                str= str.replace(`initialRouter.get("/:id", asyncHandler(initialController.viewUser));`,`initialRouter.use(asyncHandler(Authentication.authCheck));\ninitialRouter.get("/", asyncHandler(initialController.viewUser));`)
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/routes/initialRoutes.js`, str)
    }

    public static async writingSql(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","RoutesWrite","routesContentTS.txt"))
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/routes/initialRoutes.ts`, reading)
    }

    public static async writingSqlJWT(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","RoutesWrite","routesContentTS.txt"))
            let str: string = reading.toString("utf-8");
            str = str.replace(`import asyncHandler from "../utils/asyncHandler";`, `import Authentication from "../middleware/authValidation";\nimport asyncHandler from "../utils/asyncHandler";`)
            str= str.replace(`initialRouter.post("/register", asyncHandler(initialController.registration));`,
                `initialRouter.post("/register", asyncHandler(initialController.registration));\ninitialRouter.post("/login", asyncHandler(initialController.login));\ninitialRouter.use(asyncHandler(Authentication.authCheck))`
            )
            str=str.replace(`initialRouter.get("/:id", asyncHandler(initialController.viewUser));`,`initialRouter.get("/", asyncHandler(initialController.viewUser));`)
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/routes/initialRoutes.ts`, str)
    }

    public static async writingSqlJWTReqval(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","RoutesWrite","routesContentTS.txt"))
            let str: string = reading.toString("utf-8");
            str = str.replace(`import asyncHandler from "../utils/asyncHandler";`, `import { RegistrationDTO, LoginDTO } from "../DTO/authDTO";\nimport { validateInput } from "../middleware/validation";\nimport Authentication from "../middleware/authValidation";\nimport asyncHandler from "../utils/asyncHandler";`)
            str= str.replace(`initialRouter.post("/register", asyncHandler(initialController.registration));`,
                `initialRouter.post("/register", asyncHandler(validateInput(RegistrationDTO)), asyncHandler(initialController.registration));\ninitialRouter.post("/login",asyncHandler(validateInput(LoginDTO)), asyncHandler(initialController.login));\ninitialRouter.use(asyncHandler(Authentication.authCheck))`
            )

            str= str.replace(`initialRouter.get("/:id", asyncHandler(initialController.viewUser));`,`\ninitialRouter.get("/", asyncHandler(initialController.viewUser));`)
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/routes/initialRoutes.ts`, str)
    }

    public static async writingSqlReqval(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","RoutesWrite","routesContentTS.txt"))
            let str: string = reading.toString("utf-8");
            str = str.replace(`import asyncHandler from "../utils/asyncHandler";`, `import { RegistrationDTO } from "../DTO/authDTO";\nimport { validateInput } from "../middleware/validation";\nimport asyncHandler from "../utils/asyncHandler";`)
            str= str.replace(`initialRouter.post("/register", asyncHandler(initialController.registration));`,
                `initialRouter.post("/register", asyncHandler(validateInput(RegistrationDTO)), asyncHandler(initialController.registration));`
            )
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/routes/initialRoutes.ts`, str)
    }
}


import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class indexWriting {
    public static async IndexMongoWriting(dirName:string): Promise<void> {
        try {
            let reading = await readFile(path.join(__dirname,"../","templates","IndexWrite","indexContent.txt"))
            let replacer = `const { apiRouter } = require("./routes/apiRoutes");\nconst { MongoConfig } =require("./config/dbConfig.js");`
            let str = reading.toString().replace(`const { apiRouter } = require("./routes/apiRoutes");`, replacer)
            let index = await writeFile(process.cwd() + `/${dirName}/src/index.js`, str)
            console.log("Finished writing index.js");
        } catch (err) {
            console.log("Error in writing index file!", err);
        }
    }

    public static async IndexSqlWriting(dirName:string): Promise<void> {
        try {
            let reading = await readFile(path.join(__dirname,"../","templates","IndexWrite","indexContentTS.txt"))
    //         let replacerImport = `const { apiRouter } = require("./routes/apiRoutes");\nconst { AppDataSource } =require("./config/dbConfig.js");`
    //         let sql = `app.use(express.static(path.join(__dirname,"public")));\nAppDataSource.initialize()
    // .then(() => {
    //     console.log("Data Source has been initialized!")
    // }).catch((err) => {
    //     console.error("Error during Data Source initialization", err)
    // });`
    //         let str = reading.toString();
    //         str = str.replace(`const { apiRouter } = require("./routes/apiRoutes");`, replacerImport)
    //         let str1 = str.replace(`app.use(express.static(path.join(__dirname,"public")));`, sql)
            let index = await writeFile(process.cwd() + `/${dirName}/src/index.ts`, reading)
            console.log("Finished writing index.ts");
        } catch (err) {
            console.log("Error in writing index file!", err);
        }
    }
}


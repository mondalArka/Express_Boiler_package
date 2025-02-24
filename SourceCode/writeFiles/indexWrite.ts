import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class indexWriting {
        public static async IndexMongoWriting(dirName: string): Promise<void> {
                let reading: Buffer = await readFile(path.join(__dirname, "../", "templates", "IndexWrite", "indexContent.txt"))
                let replacer = `const { apiRouter } = require("./routes/apiRoutes");\nconst { MongoConfig } =require("./config/dbConfig.js");`
                let str = reading.toString().replace(`const { apiRouter } = require("./routes/apiRoutes");`, replacer)
                let index: void = await writeFile(process.cwd() + `/${dirName}/src/index.js`, str)
        }

        public static async IndexSqlWriting(dirName: string): Promise<void> {
                let reading: Buffer = await readFile(path.join(__dirname, "../", "templates", "IndexWrite", "indexContentTS.txt"))
                let index: void = await writeFile(process.cwd() + `/${dirName}/src/index.ts`, reading)
        }

        public static async IndexSqlTypeormWriting(dirName: string): Promise<void> {
                let reading: Buffer = await readFile(path.join(__dirname, "../", "templates", "IndexWrite", "indexTypeorm.txt"))
                let index: void = await writeFile(process.cwd() + `/${dirName}/src/index.ts`, reading)
        }
}


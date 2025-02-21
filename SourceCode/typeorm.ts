import { writeFile, readFile } from "fs/promises";
export default class typeorm {
    public static async scriptPackage(sys: string, Path: string) {
        try {
            const pacakgePath = Path + `/package.json`
            const reading = await readFile(pacakgePath);
            Promise.resolve(reading).catch(err => {
                console.log("Error in reading package.json!", err);
                process.exit(1);
            })
            let str = JSON.parse(reading.toString("utf-8"));
            if (sys == "linux") {
                str["scripts"]["start"] = "rm -rf dist && npm run build && node ./dist/index.js"
                str["scripts"]["build"] = " tsc -p ."
                str["scripts"]["generate:migrate"] = "rm -rf dist && npm run build && typeorm-ts-node-esm migration:generate src/migrations/${TABLE_NAME} -d src/config/dataSource.ts"
                str["scripts"]["migrate"] = "rm -rf dist && npm run build && typeorm-ts-node-esm migration:run -d src/config/dataSource.ts"
            }
            if (sys == "win32") {
                str["scripts"]["start"] = "rimraf dist && npm run build && node ./dist/index.js"
                str["scripts"]["build"] = "tsc -p ."
                str["scripts"]["generate:migrate"] = "rimraf dist && npm run build && typeorm-ts-node-esm migration:generate src/migrations/${TABLE_NAME} -d src/config/dataSource.ts"
                str["scripts"]["client:generate"] = "rimraf dist && npm run build && typeorm-ts-node-esm migration:run -d src/config/dataSource.ts"
            }
            let writes = await writeFile(pacakgePath, JSON.stringify(str, null, 2))
            Promise.resolve(writes).catch(err => {
                console.log("\x1b[31mError in writing package.json!\x1b[0m", err);
                process.exit(1);
            })
            console.log("\x1b[32mModified package.json...\x1b[0m");
        } catch (err) {
            console.log("\x1b[31mError in modifying package.json!\x1b[0m", err);
            process.exit(1);
        }
    }
}
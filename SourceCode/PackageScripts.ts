import { writeFile, readFile } from "fs/promises";
export default class packMod {
    public static async scriptPackage(sys: string, Path: string) {
        console.log("sscripts");
        const pacakgePath = Path + `/package.json`
        const reading = await readFile(pacakgePath);
        Promise.resolve(reading).catch(err => {
            console.log("Error in reading package.json!", err);
            process.exit(1);
        })
        let str = JSON.parse(reading.toString("utf-8"));
        if (sys == "linux") {
            str["scripts"]["start"] = "rm -rf dist && npm run build && node ./dist/index.js"
            str["scripts"]["build"] = "tsc -p ."
            str["scripts"]["migrate"] = "npx prisma migrate dev --name init"
            str["scripts"]["client:generate"] = "npx prisma generate"
        }
        if (sys == "win32") {
            str["scripts"]["start"] = "rimraf dist && npm run build && node ./dist/index.js"
            str["scripts"]["build"] = "tsc -p ."
            str["scripts"]["migrate"] = "npx prisma migrate dev --name init"
            str["scripts"]["client:generate"] = "npx prisma generate"
        }
        let writes = await writeFile(pacakgePath, JSON.stringify(str, null, 2))
        Promise.resolve(writes).catch(err => {
            console.log("Error in writing package.json!", err);
            process.exit(1);
        })
        console.log("Modified package.json!");
    }
}
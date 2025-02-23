import { writeFile, readFile } from "fs/promises";
import { Events } from "./exports";
export default class packMod {
    public static async scriptPackage(sys: string, Path: string, args: Array<string | string>) {
        try {
            const pacakgePath = Path + `/package.json`
            const reading = await readFile(pacakgePath);
            Promise.resolve(reading).catch(err => {
                console.log("Error in reading package.json!", err);
                process.exit(1);
            })
            let str = JSON.parse(reading.toString("utf-8"));
            switch(sys) {
                case "linux":{
                    if(args[5].includes("mongoose")){
                        str["type"]="commonjs"
                        str["scripts"]["start"] = "nodemon index.js"
                        str["dependencies"] = {
                            "nodemon": "^3.1.9",
                            "mongoose":"^8.10.1",
                            "express":"^4.21.2",
                            "cors":"^2.8.5",
                            "dotenv":"^16.4.7",
                        }
                        if(args[5].includes("jsonwebtoken")){
                            str["dependencies"]["jsonwebtoken"]="^9.0.2"
                            str["dependencies"]["bcrypt"]="^5.1.1"
                        }
                        if(args[5].includes("joi")) str["dependencies"]["joi"]="^17.13.3"

                    }else if(args[5].includes("prisma")){
                        str["type"]="commonjs"
                        str["scripts"]["start"] = "npm run build && node ./dist/index.js"
                        str["scripts"]["build"] = "rm -rf dist && tsc -p ."
                        str["scripts"]["migrate"] = "npx prisma migrate dev --name init"
                        str["scripts"]["client:generate"] = "npx prisma generate"
                        str["dependencies"]={
                            "prisma":"^6.4.1",
                            "@pisma/client": "^6.4.1",
                            "express":"^4.21.2",
                            "cors":"^2.8.5",
                            "dotenv":"^16.4.7",
                        }
                        str["devDependencies"]={
                            "@types/express": "^5.0.0",
                            "@types/node": "^22.13.5",
                            "@types/cors": "^2.8.17",
                            "typescript": "^5.7.3"
                        }

                        if(args[5].includes("jsonwebtoken")){
                            str["dependencies"]["jsonwebtoken"]="^9.0.2",
                            str["dependencies"]["bcrypt"]="^5.1.1"
                            str["devDependencies"]["@types/jsonwebtoken"]="^9.0.9"
                            str["devDependencies"]["@types/bcrypt"]="^5.0.2"
                        }
                        if(args[5].includes("class-validator")){
                            str["dependencies"]["class-validator"]="^0.14.1"
                            str["dependencies"]["class-transformer"]="^0.5.1"
                            str["dependencies"]["reflect-metadata"]="^0.2.2"
                        }
                    }else{
                        str["type"]="commonjs"
                        str["scripts"]["start"] = "npm run build && node ./dist/index.js"
                        str["scripts"]["build"] = "rm -rf dist && tsc -p ."
                        str["scripts"]["generate:migrate"] = "npm run build && typeorm migration:generate src/migrations/${TABLE_NAME} -d dist/config/dataSource.ts"
                        str["scripts"]["migrate"] = "npm run build && typeorm migration:run -d src/config/dataSource.ts"
                        str["dependencies"]={
                            "mysql2":"^3.12.0",
                            "typeorm": "^0.3.20",
                            "express":"^4.21.2",
                            "cors":"^2.8.5",
                            "dotenv":"^16.4.7",
                        }
                        str["devDependencies"]={
                            "@types/express": "^5.0.0",
                            "@types/node": "^22.13.5",
                            "@types/cors": "^2.8.17",
                            "typescript": "^5.7.3"
                        }
                        if(args[5].includes("jsonwebtoken")){
                            str["dependencies"]["jsonwebtoken"]="^9.0.2"
                            str["dependencies"]["bcrypt"]="^5.1.1"
                            str["devDependencies"]["@types/jsonwebtoken"]="^9.0.9"
                            str["devDependencies"]["@types/bcrypt"]="^5.0.2"
                        }
                        if(args[5].includes("class-validator")){
                            str["dependencies"]["class-validator"]="^0.14.1"
                            str["dependencies"]["class-transformer"]="^0.5.1"
                            str["dependencies"]["reflect-metadata"]="^0.2.2"
                        }
                    }
                }
                case "win32":{
                if(args[5].includes("mongoose")){
                    str["type"]="commonjs"
                    str["scripts"]["start"] = "nodemon index.js"
                    str["dependencies"] = {
                        "nodemon": "^3.1.9",
                        "mongoose":"^8.10.1",
                        "express":"^4.21.2",
                        "cors":"^2.8.5",
                        "dotenv":"^16.4.7",
                    }
                    if(args[5].includes("jsonwebtoken")){
                        str["dependencies"]["jsonwebtoken"]="^9.0.9"
                        str["dependencies"]["bcrypt"]="^5.1.1"
                    }
                    if(args[5].includes("joi")) str["dependencies"]["joi"]="^17.13.3"

                }else if(args[5].includes("prisma")){
                    str["type"]="commonjs"
                    str["scripts"]["start"] = "npm run build && node ./dist/index.js"
                    str["scripts"]["build"] = "rimraf dist && tsc -p ."
                    str["scripts"]["migrate"] = "npx prisma migrate dev --name init"
                    str["scripts"]["client:generate"] = "npx prisma generate"
                    str["dependencies"]={
                        "prisma":"^6.4.1",
                        "@pisma/client": "^6.4.1",
                        "express":"^4.21.2",
                        "cors":"^2.8.5",
                        "dotenv":"^16.4.7",
                    }
                    str["devDependencies"]={
                        "@types/express": "^5.0.0",
                        "@types/node": "^22.13.5",
                        "@types/cors": "^2.8.17",
                        "typescript": "^5.7.3",
                        "rimraf":"^6.0.1"
                    }

                    if(args[5].includes("jsonwebtoken")){
                        str["dependencies"]["jsonwebtoken"]="^9.0.2"
                        str["dependencies"]["bcrypt"]="^5.1.1"
                        str["devDependencies"]["@types/jsonwebtoken"]="^9.0.9"
                        str["devDependencies"]["@types/bcrypt"]="^5.0.2"
                    }
                    if(args[5].includes("class-validator")){
                        str["dependencies"]["class-validator"]="^0.14.1"
                        str["dependencies"]["class-transformer"]="^0.5.1"
                        str["dependencies"]["reflect-metadata"]="^0.2.2"
                    }
                }else{
                    str["type"]="commonjs"
                    str["scripts"]["start"] = "npm run build && node ./dist/index.js"
                    str["scripts"]["build"] = "rimraf dist && tsc -p ."
                    str["scripts"]["generate:migrate"] = "npm run build && typeorm migration:generate src/migrations/${TABLE_NAME} -d dist/config/dataSource.ts"
                    str["scripts"]["migrate"] = "npm run build && typeorm migration:run -d src/config/dataSource.ts"
                    str["dependencies"]={
                        "mysql2":"^3.12.0",
                        "typeorm": "^0.3.20",
                        "express":"^4.21.2",
                        "cors":"^2.8.5",
                        "dotenv":"^16.4.7",
                    }
                    str["devDependencies"]={
                        "@types/express": "^5.0.0",
                        "@types/node": "^22.13.5",
                        "@types/cors": "^2.8.17",
                        "typescript": "^5.7.3",
                        "rimraf":"^6.0.1"
                    }
                    if(args[5].includes("jsonwebtoken")){
                        str["dependencies"]["jsonwebtoken"]="^9.0.2",
                        str["dependencies"]["bcrypt"]="^5.1.1"
                        str["devDependencies"]["@types/jsonwebtoken"]="^9.0.9",
                        str["devDependencies"]["@types/bcrypt"]="^5.0.2"
                    }
                    if(args[5].includes("class-validator")){
                        str["dependencies"]["class-validator"]="^0.14.1"
                        str["dependencies"]["class-transformer"]="^0.5.1"
                        str["dependencies"]["reflect-metadata"]="^0.2.2"
                    }
                }
                }
        } 
        let writes = await writeFile(pacakgePath, JSON.stringify(str, null, 2))
        Promise.resolve(writes).catch(err => {
            console.log("\x1b[31mError in writing package.json!\x1b[0m", err);
            process.exit(1);
        })
        console.log("\x1b[32mModified package.json...\x1b[0m");
        Events.EmitMessage("installed",{})
        }catch (err) {
            console.log("\x1b[31mError in modifying package.json!\x1b[0m", err);
            process.exit(1);
        }
    }
}

import { platform } from "os";
import { ExecuteSh } from "./exports";

export default class create {
    public static RunScripts(inputs: Array<string>, dirName: string): void {
        try {
            const systemIdentifier: string = platform()
            switch (systemIdentifier) {
                case "darwin":
                case "linux": {
                    const command: string = "mkdir";
                    const args: Array<string> = [
                        "-p",
                        `${dirName}`,
                        `${dirName}/src/controllers`,
                        `${dirName}/src/services`,
                        `${dirName}/src/routes`,
                        `${dirName}/src/utils`,
                    ]
                    const initalCom: string = "npm"
                    const argInitial: Array<string> = ["init", "-y"]
                    const installSh: string = "npm"
                    const argInstall: Array<string> = [
                        "install",
                        "express",
                        "cors",
                        "dotenv",
                        "bcrypt"
                    ]
                    if (inputs[1] == "Y" || inputs[1] == "y") {                       
                        args.push(`${dirName}/src/middleware`)
                        argInstall.push("jsonwebtoken");
                    }
                    if (inputs[0] == "M" || inputs[0] == "m") {
                        args.push(`${dirName}/src/config`, `${dirName}/src/models`);
                        argInstall.push("mongoose", "nodemon");
                    }
                    if (inputs[0] == "S" || inputs[0] == "s")
                        argInstall.push("prisma", "@prisma/client", "typescript")

                    if ((inputs[2] == "Y" || inputs[2] == "y") && (inputs[0] == "M" || inputs[0] == "m")) {
                        argInstall.push("joi");
                        args.push(`${dirName}/src/validators`);
                    }
                    else if ((inputs[2] == "Y" || inputs[2]) == "y" && (inputs[0] == "S" || inputs[0] == "s")) {
                        argInstall.push("class-validator", "class-transformer");
                        args.push(`${dirName}/src/DTO`, `${dirName}/src/middleware`)
                    }

                    // typeorm and prisma
                    if(inputs[1]?.toLowerCase()=="p")
                        argInstall.push("prisma", "@prisma/client");
                    else if(inputs[1]?.toLowerCase()=="t"){
                        argInstall.push("typeorm","mysql2","ts-node-dev");
                        args.push(`${dirName}/src/Entity`,`${dirName}/src/config`,`${dirName}/src/migrations`);
                    }

                    ExecuteSh.createDirectoryAndInitialize(command, args, initalCom, argInitial, installSh, argInstall, systemIdentifier, dirName)
                    break;
                }
                case "win32": {
                    const command: string = "cmd";
                    const args: Array<string> = [
                        "/c",
                        "mkdir",
                        `${dirName}`,
                        `${dirName}\\src`,
                        `${dirName}\\src\\controllers`,
                        `${dirName}\\src\\services`,
                        `${dirName}\\src\\routes`,
                        `${dirName}\\src\\utils`
                    ]
                    const initalCom: string = "npm.cmd"
                    const argInitial: Array<string> = ["init", "-y"]
                    const installSh: string = "npm"
                    const argInstall: Array<string> = [
                        "install",
                        "express",
                        "cors",
                        "dotenv",
                        "bcrypt",
                        "rimraf"
                    ]
                    if (inputs[2] == "Y" || inputs[2] == "y") {
                        args.push(`${dirName}\\src\\middleware`)
                        argInstall.push("jsonwebtoken");
                    }
                    if (inputs[0] == "M" || inputs[0] == "m") {
                        args.push(`${dirName}\\src\\config`, `${dirName}\\src\\models`);
                        argInstall.push("mongoose", "nodemon");
                    }
                    if (inputs[0] == "S" || inputs[0] == "s")
                        argInstall.push("typescript")

                    if ((inputs[3] == "Y" || inputs[3] == "y") && (inputs[0] == "M" || inputs[0] == "m")) {
                        argInstall.push("joi");
                        args.push(`${dirName}\\src\\validators`);
                    }
                    else if ((inputs[3] == "Y" || inputs[3]) == "y" && (inputs[0] == "S" || inputs[0] == "s")) {
                        argInstall.push("class-validator", "class-transformer");
                        args.push(`${dirName}\\src\\DTO`, `${dirName}\\src\\middleware`)
                    }

                    if(inputs[1]?.toLowerCase()=="p")
                        argInstall.push("prisma", "@prisma/client");
                    else if(inputs[1]?.toLowerCase()=="t"){
                        argInstall.push("typeorm","mysql2","ts-node-dev");
                        args.push(`${dirName}\\src\\Entity`,`${dirName}\\src\\config`,`${dirName}\\src\\migrations`);
                    }
                    
                    ExecuteSh.createDirectoryAndInitialize(command, args, initalCom, argInitial, installSh, argInstall, systemIdentifier, dirName)
                    break;
                }
                default: {
                    console.log("\x1b[31mOS Not Supported!\x1b[0m");
                }
            }
        } catch (err) {
            console.log("\x1b[31mError in creating directories or installing dependencies!\x1b[30m");
            console.log(`\x1b[31m${err}\x1b[0m`);
            process.exit(1);
        }
    }
}

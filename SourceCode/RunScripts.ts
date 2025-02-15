
import { platform } from "os";
import { ExecuteSh } from "./exports";

export default class create {
    public static RunScripts(inputs: Array<string>, dirName: string): void {
        try {
            const systemIdentifier: string = platform()
            switch (systemIdentifier) {
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
                        "nodemon",
                        "bcrypt"
                    ]
                    if (inputs[1] == "Y" || inputs[1] == "y") {
                        args.push(`${dirName}/src/middleware`)
                        argInstall.push("jsonwebtoken");
                    }
                    if (inputs[0] == "M" || inputs[0] == "m") {
                        args.push(`${dirName}/src/config`, `${dirName}/src/models`);
                        argInstall.push("mongoose");
                    }
                    if (inputs[0] == "S" || inputs[0] == "s")
                        argInstall.push("prisma", "@prisma/client", "mysql2", "typescript")

                    ExecuteSh.createDirectoryAndInitialize(command, args, initalCom, argInitial, installSh, argInstall, systemIdentifier,dirName)
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
                        "nodemon",
                        "bcrypt"
                    ]
                    if (inputs[1] == "Y" || inputs[1] == "y") {
                        args.push(`${dirName}\\src\\middleware`)
                        argInstall.push("jsonwebtoken");
                    }
                    if (inputs[0] == "M" || inputs[0] == "m") {
                        args.push(`${dirName}\\src\\config`,`${dirName}\\src\\models`);
                        argInstall.push("mongoose");
                    }
                    if (inputs[0] == "S" || inputs[0] == "s")
                        argInstall.push("prisma", "@prisma/client", "mysql2", "typescript")

                    ExecuteSh.createDirectoryAndInitialize(command, args, initalCom, argInitial, installSh, argInstall, systemIdentifier,dirName)
                    break;
                }
                // case "darwin": {
                //     let exist = ExistDir.checkDirExists();
                //     if (exist === 1) break;
                //     this.ExecuteCommand.createDirectory()
                //     break;
                // }
                // case "freebsd": {
                //     let exist = ExistDir.checkDirExists();
                //     if (exist === 1) break;
                //     this.ExecuteCommand.createDirectory()
                //     break;
                // }
                // case "openbsd": {
                //     let exist = ExistDir.checkDirExists();
                //     if (exist === 1) break;
                //     this.ExecuteCommand.execCommand()
                //     break;
                // }
                // case "netbsd": {
                //     let exist = this.CheckDir.checkDirExists();
                //     if (exist === 1) break;
                //     this.ExecuteCommand.createDirectory()
                //     break;
                // }
                default: {
                    console.log("OS Not Supported!");
                }
            }
        } catch (err) {
            console.log(err);
            throw err
        }
    }
}

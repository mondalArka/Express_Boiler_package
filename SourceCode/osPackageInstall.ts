import { execFile, ExecFileException, spawn, spawnSync } from "child_process";
import { readFile, writeFile } from "fs";
import { prismaInit, typeorm } from "./exports"
import Events from "./EventHandling";

export default class packageModify {
    public static linuxPackage(args: Array<string | Array<string>>) {
        const pacakgePath = args[8] + "/package.json";
        let argument = [...args[5]];
        execFile(args[4] as string, argument, { cwd: args[8] as string }, (err: ExecFileException | null, stdout: string, stderr: string) => {
            if (err) {
                console.log("\x1b[31mError in installing dependencies\x1b[0m: " + err.message + "\n" + err.stack);
                process.exit(1)
            } else console.log("\x1b[32mDependencies installed...\x1b[0m");
            // initialize prisma and client
            if (argument.includes("prisma")) {
                    execFile("npm", ["install", "--save-dev", "@types/express", "@types/cors", "@types/bcrypt", "@types/jsonwebtoken","typescript"], { cwd: args[8] as string }, (err: ExecFileException | null, stdout: string, stderr: string) => {
                        if (err) {
                            console.log("\x1b[31mError in installing Type packages: \x1b[0m" + err.message + "\n" + err.stack);
                            process.exit(1);
                        }
                        console.log("\x1b[32mType package installed...\x1b[0m");
                        Promise.resolve(prismaInit.prismaExecLinux(args[6] as string, args[8] as string)).catch(err => console.log("\x1b[31mError in prisma initialize!\x1b[0m")
                        )
                    })

            } else if(argument.includes("typeorm")){
                execFile("npm",["install", "--save-dev","typescript", "@types/express", "@types/cors", "@types/bcrypt", "@types/jsonwebtoken"],{cwd:process.cwd()+`/${args[8] as string}`},(err:ExecFileException | null,stdout:string,stderr:string)=>{
                    if(err){    
                        console.log("\x1b[31mError in installing Type packages: \x1b[0m" + err.message + "\n" + err.stack);
                        process.exit(1)
                    }
                    console.log("\x1b[32mType package installed...\x1b[0m");
                    typeorm.scriptPackage(args[6] as string, args[8] as string).then(()=>{
                        Events.EmitMessage("installed", {});
                    }); 
            })
            } else {
                const reading = readFile(pacakgePath, (err: NodeJS.ErrnoException | null, data: Buffer) => {
                    if (err) {
                        console.log("\x1b[31mError in reading package.json: \x1b[0m" + err.message + "\n" + err.stack);
                        process.exit(1)
                    }
                    let str: any = JSON.parse(data.toString("utf-8"));
                    str["scripts"]["start"] = "nodemon src/index.js";
                    writeFile(pacakgePath, JSON.stringify(str, null, 2), (err: NodeJS.ErrnoException | null) => {
                        if (err) {
                            console.log("\x1b[31mError in writing package.json: \x1b[0m" + err.message + "\n" + err.stack);
                            process.exit(1)
                        }
                        if (err) console.log("\x1b[31mError in package modification!\x1b[0m", err);
                        console.log("\x1b[32mPackage Modified package.json...\x1b[0m");
                        Events.EmitMessage("installed", {});
                    })
                });
            }
        })
    }

    public static windowsPackage(args: Array<string | Array<string>>) {
        let argument = [...args[5]];
        const packagePath = args[8] + "/package.json";
        const child = spawnSync(args[4] as string, argument, { cwd: args[8] as string, shell: true });
        if(child.error){
            console.log("\x1b[31mError in installing dependencies!: \x1b[0m",child.error);
            process.exit(1);    
        }
        console.log("\x1b[32mDependencies installed...\x1b[0m");
        
        // initialize prisma
        if (argument.includes("prisma")) {
            execFile("npm.cmd", ["install", "--save-dev", "@types/express", "@types/cors", "@types/bcrypt", "@types/jsonwebtoken","typescript","rimraf"], { cwd: args[8] as string }, (err: ExecFileException | null, stdout: string, stderr: string) => {
                if (err) {
                    console.log("\x1b[31mError in installing Type packages: \x1b[0m" + err.message + "\n" + err.stack);
                    process.exit(1)
                }
                console.log("\x1b[32mTypes installed...\x1b[0m");
                Promise.resolve(prismaInit.prismaExecWindows(args[6] as string, args[8] as string)).catch(err => console.log("\x1b[31mError in prisma initialize!\x1b[0m")
                )
            })
        } else if(argument.includes("typeorm")){
            execFile("npm.cmd",["install", "--save-dev", "@types/express", "@types/cors", "@types/bcrypt", "@types/jsonwebtoken","typescript","rimraf"],{cwd:args[8] as string},(err:ExecFileException | null,stdout:string,stderr:string)=>{
                if(err){    
                    console.log("\x1b[31mError in installing Type packages: \x1b[0m" + err.message + "\n" + err.stack);
                    process.exit(1)
                }
                console.log("\x1b[32mType package installed...\x1b[0m");
                typeorm.scriptPackage(args[6] as string, args[8] as string).then(()=>{
                    Events.EmitMessage("installed", {});
                }); 
        })
        } else {
            execFile("npm.cmd",["install","--saved-dev","rimraf"],{cwd:args[8] as string},(err:ExecFileException | null,stdout:string,
                stderr:string)=>{
                    if(err){
                        console.log("\x1b[31mError in installing rimraf\x1b[0m",err);
                        process.exit(1)
                    }
                    console.log("\x1b[32mType package installed...\x1b[0m")
                    const reading = readFile(packagePath, (err: NodeJS.ErrnoException | null, data: Buffer) => {
                        if (err) {
                            console.log("\x1b[31mError in reading package.json: \x1b[0m" + err.message + "\n" + err.stack);
                            process.exit(1)
                        }
                        let str: any = JSON.parse(data.toString("utf-8"));
                        str["scripts"]["start"] = "nodemon src/index.js";
                        writeFile(packagePath, JSON.stringify(str,null,2), (err: NodeJS.ErrnoException | null) => {
                            if (err) {
                                console.log("\x1b[31mError in writing package.json: \x1b[0m" + err.message + "\n" + err.stack);
                                process.exit(1)
                            }
                            console.log("\x1b[32mModified package.json...\x1b[0m");
                            Events.EmitMessage("installed", {});
                        })
                    });
                })
        }
    }
}

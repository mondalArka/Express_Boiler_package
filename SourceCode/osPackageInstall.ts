import { execFile, ExecFileException, spawn, spawnSync } from "child_process";
import { readFile, writeFile } from "fs";
import { prismaInit, packMod } from "./exports"
import Events from "./EventHandling";

export default class packageModify {
    public static linuxPackage(args: Array<string | Array<string>>) {
        console.log("linux");
        const pacakgePath = args[8] + "/package.json";
        let argument = [...args[5]];
        execFile(args[4] as string, argument, { cwd: args[8] as string }, (err: ExecFileException | null, stdout: string, stderr: string) => {
            if (err) {
                console.log("Error in installing dependencies: " + err.message + "\n" + err.stack);
                process.exit(1)
            } else console.log("Dependencies installed successfully!");
            // initialize prisma and client
            if (argument.includes("typescript")) {
                execFile("npx", ["-v"], (err: ExecFileException | null, stdout: string, stderr: string) => {
                    if (err) {
                        console.log("Npx not found!");
                        execFile("npm", ["install", "-g", "npx"], (err, stdout, stderr) => {
                            if (err) {
                                console.log("Error in installing npx package: " + err.message + "\n" + err.stack);
                                process.exit(1)
                            }
                            console.log("Npx installed!");
                            console.log("typessssssssss", args[8]);
                            execFile("npm", ["install", "--save-dev", "@types/express", "@types/cors", "@types/bcrypt", "@types/jsonwebtoken"], { cwd: args[8] as string }, (err: ExecFileException | null, stdout: string, stderr: string) => {
                                if (err) {
                                    console.log("Error in installing Type packages: " + err.message + "\n" + err.stack);
                                    process.exit(1)
                                }
                                console.log("Types installed");
                                Promise.resolve(prismaInit.prismaExec(args[6] as string, args[8] as string)).catch(err => console.log("Error in prisma initialize")
                                )
                            })
                        })
                    }
                    execFile("npm", ["install", "--save-dev", "@types/express", "@types/cors", "@types/bcrypt", "@types/jsonwebtoken"], { cwd: args[8] as string }, (err: ExecFileException | null, stdout: string, stderr: string) => {
                        if (err) {
                            console.log("Error in installing Type packages: " + err.message + "\n" + err.stack);
                            process.exit(1)
                        }
                        console.log("Types installed");
                        Promise.resolve(prismaInit.prismaExec(args[6] as string, args[8] as string)).catch(err => console.log("Error in prisma initialize")
                        )
                    })
                })

            } else {
                const reading = readFile(pacakgePath, (err: NodeJS.ErrnoException | null, data: Buffer) => {
                    if (err) {
                        console.log("Error in reading package.json: " + err.message + "\n" + err.stack);
                        process.exit(1)
                    }
                    let str: any = JSON.parse(data.toString("utf-8"));
                    str["scripts"]["start"] = "nodemon src/index.js";
                    writeFile(pacakgePath, JSON.stringify(str, null, 2), (err: NodeJS.ErrnoException | null) => {
                        if (err) {
                            console.log("Error in writing package.json: " + err.message + "\n" + err.stack);
                            process.exit(1)
                        }
                        if (err) console.log("Error in package modification", err);
                        console.log("Modified package.json");
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
            console.log("Error in installing dependencies!: ",child.error);
            process.exit(1);    
        }
        // initialize prisma
        if (argument.includes("typescript")) {
            const s1 = spawnSync("npx", ["-v"])

            if (s1.error) {
                const s2 = spawnSync("npm", ["install", "-g", "npx"])
                if (s2.error) {
                    console.log("Error in installing npx: " + s2.error.message + "\n" + s2.error.stack);
                    process.exit(1)
                }
            }
            execFile("npm", ["install", "--save-dev", "@types/express", "@types/cors", "@types/bcrypt", "@type/jsonwebtoken"], { cwd: args[8] as string }, (err: ExecFileException | null, stdout: string, stderr: string) => {
                if (err) {
                    console.log("Error in installing Type packages: " + err.message + "\n" + err.stack);
                    process.exit(1)
                }
                console.log("Types installed");
                Promise.resolve(prismaInit.prismaExec(args[6] as string, args[8] as string)).catch(err => console.log("Error in prisma initialize")
                )
            })
        } else {
            const reading = readFile(packagePath, (err: NodeJS.ErrnoException | null, data: Buffer) => {
                if (err) {
                    console.log("Error in reading package.json: " + err.message + "\n" + err.stack);
                    process.exit(1)
                }
                let str: any = JSON.parse(data.toString("utf-8"));
                str["scripts"]["start"] = "nodemon src/index.js";
                writeFile(packagePath, JSON.stringify(str,null,2), (err: NodeJS.ErrnoException | null) => {
                    if (err) {
                        console.log("Error in writing package.json: " + err.message + "\n" + err.stack);
                        process.exit(1)
                    }
                    console.log("Modified package.json");
                    Events.EmitMessage("installed", {});
                })
            });
        }
    }
}

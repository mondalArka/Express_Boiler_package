import { execFile, ExecFileException, spawn, spawnSync } from "child_process";
import { readFile, writeFile } from "fs";
import { prismaInit, packMod } from "./exports"
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
            if (argument.includes("typescript")) {
                execFile("npx", ["-v"], (err: ExecFileException | null, stdout: string, stderr: string) => {
                    if (err) {
                        console.log("\x1b[31mNpx not found!\x1b[0m");
                        console.log("\x1b[34mInstalling npx CLI...\x1b[0m");
                        
                        execFile("npm", ["install", "-g", "npx"], (err, stdout, stderr) => {
                            if (err) {
                                console.log("\x1b[31mError in installing npx package: \x1b[0m" + err.message + "\n" + err.stack);
                                process.exit(1)
                            }
                            console.log("\x1b[32mNpx installed...\x1b[0m");
                            execFile("npm", ["install", "--save-dev", "@types/express", "@types/cors", "@types/bcrypt", "@types/jsonwebtoken"], { cwd: args[8] as string }, (err: ExecFileException | null, stdout: string, stderr: string) => {
                                if (err) {
                                    console.log("\x1b[32mError in installing Type packages: \x1b[0m" + err.message + "\n" + err.stack);
                                    process.exit(1)
                                }
                                console.log("\x1b[32mType packages installed...\x1b[0m");
                                Promise.resolve(prismaInit.prismaExecLinux(args[6] as string, args[8] as string)).catch(err => console.log("\x1b[31mError in prisma initialize!\x1b[0m")
                                )
                            })
                        })
                    }
                    execFile("npm", ["install", "--save-dev", "@types/express", "@types/cors", "@types/bcrypt", "@types/jsonwebtoken"], { cwd: args[8] as string }, (err: ExecFileException | null, stdout: string, stderr: string) => {
                        if (err) {
                            console.log("\x1b[31mError in installing Type packages: \x1b[0m" + err.message + "\n" + err.stack);
                            process.exit(1)
                        }
                        console.log("\x1b[32mType package installed...\x1b[0m");
                        Promise.resolve(prismaInit.prismaExecLinux(args[6] as string, args[8] as string)).catch(err => console.log("\x1b[31mError in prisma initialize!\x1b[0m")
                        )
                    })
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
        if (argument.includes("typescript")) {
            const s1 = spawnSync("npx", ["-v"])

            if (s1.error) {
                const s2 = spawnSync("npm.cmd", ["install", "-g", "npx"])
                if (s2.error) {
                    console.log("\x1b[31mError in installing npx: \x1b[0m" + s2.error.message + "\n" + s2.error.stack);
                    process.exit(1)
                }
            }
            execFile("npm.cmd", ["install", "--save-dev", "@types/express", "@types/cors", "@types/bcrypt", "@types/jsonwebtoken"], { cwd: args[8] as string }, (err: ExecFileException | null, stdout: string, stderr: string) => {
                if (err) {
                    console.log("\x1b[31mError in installing Type packages: \x1b[0m" + err.message + "\n" + err.stack);
                    process.exit(1)
                }
                console.log("\x1b[32mTypes installed...\x1b[0m");
                Promise.resolve(prismaInit.prismaExecWindows(args[6] as string, args[8] as string)).catch(err => console.log("\x1b[31mError in prisma initialize!\x1b[0m")
                )
            })
        } else {
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
        }
    }
}

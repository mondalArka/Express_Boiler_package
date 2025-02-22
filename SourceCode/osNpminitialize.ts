import {  execFile, ExecFileException, } from "child_process";
import { packMod } from "./exports";

export default class npmInitalize {
    public static linuxNpmInstall(args: Array<string | Array<string>>) {
        let argument: Array<string> = [...args[3]]
        execFile(args[2] as string, argument, { cwd: args[8] as string }, (err: ExecFileException | null, stdout: string, stderr: string) => {
            if (err) {
                console.log("\x1b[31mError in npm initialize!\x1b[0m", err);
                process.exit(1);
            } 
            console.log("\x1b[32mNpm initialized...\x1b[0m");
            Promise.resolve(packMod.scriptPackage(args[6] as string,args[8] as string,args as string[] ))
        })
    }

    public static windowsNpmInstall(args: Array<string | Array<string>>) {
        let argument: Array<string> = [...args[3]]
        const child = execFile(args[2] as string, argument, { cwd: args[8] as string },
            (err: ExecFileException | null, stdout: string, stderr: string) => {
                if (err) {
                    console.log("\x1b[31mError in windows npm install!\x1b[0m", err);
                    process.exit(1);
                }
                console.log("\x1b[32mNpm initialized...\x1b[0m");
                Promise.resolve(packMod.scriptPackage(args[6] as string,args[8] as string,args as string[] ))
            })
    }
}


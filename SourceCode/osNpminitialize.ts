import { exec, execFile, ExecFileException, spawn, spawnSync } from "child_process";
import { PackageModifier } from "./exports";

export default class npmInitalize {
    public static linuxNpmInstall(args: Array<string | Array<string>>) {
        console.log(args[8], "path installllll");
        console.log("linux npm install");
        let argument: Array<string> = [...args[3]]
        console.log(argument, "install npms", args[2]);

        execFile(args[2] as string, argument, { cwd: args[8] as string }, (err: ExecFileException | null, stdout: string, stderr: string) => {
            if (err) {
                console.log("Error in npm initialize!", err);
                process.exit(1);
            } else console.log("Npm initialized successfully");
            PackageModifier.linuxPackage(args)
        })
    }

    public static windowsNpmInstall(args: Array<string | Array<string>>) {
        console.log("windows npm", args[2]);
        let argument: Array<string> = [...args[3]]
        const child = execFile(args[2] as string, argument, { cwd: args[8] as string },
            (err: ExecFileException | null, stdout: string, stderr: string) => {
                if (err) {
                    console.log("Error in windows npm install", err);
                    process.exit(1);
                }
                PackageModifier.windowsPackage(args)
            })
        console.log("Npm initialized successfully");
        
    }
}


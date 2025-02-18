import { exec, execFile, ExecFileException, spawn, spawnSync } from "child_process";
import { PackageModifier } from "./exports";

export default class npmInitalize {
    public static linuxNpmInstall(args: Array<string | Array<string>>) {
        let argument: Array<string> = [...args[3]]
        execFile(args[2] as string, argument, { cwd: args[8] as string }, (err: ExecFileException | null, stdout: string, stderr: string) => {
            if (err) {
                console.log("\x1b[31mError in npm initialize!\x1b[0m", err);
                process.exit(1);
            } else console.log("\x1b[32mNpm initialized...\x1b[0m");
            PackageModifier.linuxPackage(args)
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
                PackageModifier.windowsPackage(args)
            })
        console.log("\x1b[32mNpm initialized...\x1b[0m");
    }
}


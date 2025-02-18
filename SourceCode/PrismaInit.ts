import { execFile, ExecFileException } from "child_process";
import { Events, packMod } from "./exports";
export default class prismaInit {
    public static async prismaExecLinux(sys: string, dirPath: string): Promise<void> {
        execFile("npx", ["prisma", "init"], { cwd: dirPath }, (err: ExecFileException | null, stdout: string, stderr: string) => {
            if (err) {
                console.log("\x1b[31mError in initializing prisma: \x1b[0m", err);
                process.exit(1);
            } else console.log("\x1b[32mPrisma initialized\x1b[0m");
            packMod.scriptPackage(sys, dirPath).then(() => {
                Events.EmitMessage("installed", {});
            }).catch(err => console.log("\x1b[31mError in scripts\x1b[0m")
            );
        })
    }

    public static async prismaExecWindows(sys: string, dirPath: string): Promise<void> {
        execFile("npx.cmd", ["prisma", "init"], { cwd: dirPath }, (err: ExecFileException | null, stdout: string, stderr: string) => {
            if (err) {
                console.log("\x1b[31mError in initializing prisma!: \x1b[0m", err);
                process.exit(1);
            } else console.log("\x1b[32mPrisma initialized...\x1b[0m");
            packMod.scriptPackage(sys, dirPath).then(() => {
                Events.EmitMessage("installed", {});
            }).catch(err => console.log("\x1b[31mError in scripts!\x1b[0m")
            );
        })
    }
}
import { execFile, ExecFileException } from "child_process";
import { Events, packMod } from "./exports";
export default class prismaInit {
    public static async prismaExec(sys: string, dirPath: string): Promise<void> {
        execFile("npx", ["prisma", "init"], { cwd: dirPath }, (err: ExecFileException | null, stdout: string, stderr: string) => {
            if (err) {
                console.log("Error in initializing prisma!: ", err);
                process.exit(1);
            } else console.log("Prisma initialized successfully!");

            execFile("touch", [".env"], { cwd: dirPath }, (err: ExecFileException | null, stdout: string, stderr: string) => {
                if (err) {
                    console.log("Error in creating .env!: ", err);
                    process.exit(1)
                }
                packMod.scriptPackage(sys, dirPath).then(() => {
                    Events.EmitMessage("installed", {});
                }).catch(err => console.log("Error in scripts")
                );
            })
        })
    }
}
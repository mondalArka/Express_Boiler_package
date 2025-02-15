import { execFile } from "child_process"
import { npmInstall } from "./exports";
export default class Execution {
    public static createDirectoryAndInitialize(...args: Array<string | Array<string>>): void {
        try {
            console.log(args, "args");
            execFile(args[0] as string, args[1] as Array<string>, (err: any, stdout: any, stderr: any) => {
                if (err) {
                    console.log("Error in creating directories!");
                    console.log(err)
                } else console.log("Directories created!");

                this.installDependenciesAndModify(args)
            })
        } catch (err) {
            console.log(err);
            throw err
        }
    }

    public static installDependenciesAndModify(args: Array<string | Array<string>>): void {
        try {
            // Initialize npm
            const DirectoryPath = process.cwd() + `/${args[7]}`
            args.push(DirectoryPath);
            if (args[6] == "linux") npmInstall.linuxNpmInstall(args)
            if (args[6] == "win32") npmInstall.windowsNpmInstall(args)
        } catch (err) {
            console.log("Error in installing dependencies!\n", err);
            throw err
        }
    }
}
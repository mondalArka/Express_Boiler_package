#!/usr/bin/env node
import PopulateFiles from "../populate";
import { ExistDir, Events } from "../exports";

class setup {
    public static async settingUp(): Promise<void> {
        let num: number = 2;
        let name: string = process.argv[2];
        if (name === undefined || name === "" || name === null) {
            console.log("\x1b[32mPlease provide a directory name!\x1b[0m");
            do {
                name = await ExistDir.noName();
                num = await ExistDir.checkDirExists(name);
            } while (num == 1)
        }
        if (num == 2) {
            num = await ExistDir.checkDirExists(name);
            if (num == 1) {
                do {
                    name = await ExistDir.noName();
                    num = await ExistDir.checkDirExists(name);
                } while (num == 1)
            }
        }
        console.log("");
        PopulateFiles.main(name);
    }
}

setup.settingUp();
Events.on("done", () => {
    console.log();
    console.log("\x1b[32mSetup done.\x1b[0m");
    console.log("\x1b[36mHappy Coding!\x1b[0m");
})

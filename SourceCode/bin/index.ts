#!/usr/bin/env node

import PopulateFiles from "../populate";
import { ExistDir, Events } from "../exports";

const name: string = process.argv[2];
if (name == undefined || name == "" || name == null) {
    console.log("Please provide a project name!");
    process.exit(1);
}

class setup {
    public static async settingUp(): Promise<void> {
        ExistDir.checkDirExists(name);
        await PopulateFiles.main(name);
    }
}

setup.settingUp();
Events.on("done", () => {
    console.log();
    console.log("\x1b[32mSetup done.\x1b[0m");
    console.log("\x1b[36mHappy Coding!\x1b[0m");
})

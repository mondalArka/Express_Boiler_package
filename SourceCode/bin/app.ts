import PopulateFiles from "../populate";
import { ExistDir, Events } from "../exports";

class setup {
    public static async settingUp(): Promise<void> {
        ExistDir.checkDirExists("");
        await PopulateFiles.main("ExpressJs");
    }
}

setup.settingUp();
Events.on("done", () => {
    console.log();
    console.log("\x1b[32mSetup done.\x1b[0m");
    console.log("\x1b[36mHappy Coding!\x1b[0m");
})

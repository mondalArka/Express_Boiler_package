import PopulateFiles from "../populate";
import { ExistDir } from "../exports"; 

// const name:string = process.argv[2];
// if(name == undefined || name == "" || name == null){
//     console.log("Please provide a project name!");
//     process.exit(1);
// } 
class setup {
    public static async settingUp(): Promise<void> {
        ExistDir.checkDirExists("");
        await PopulateFiles.main("ExpressJs");
        console.log("Setup done.\nHappy Coding!");
    }
}

setup.settingUp();

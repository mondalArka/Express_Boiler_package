import { createInterface } from "readline/promises";
import { Events } from "./exports";
export default class inputs {
    public static async userInputs(): Promise<void> {
        try {
            let orm: string = "";
            let userInputs: Array<string> = []
            const rl = createInterface({
                input: process.stdin,
                output: process.stdout
            })
            let DBC = await rl.question("\x1b[33mWhich database you want to install?\nNote: Using mysql as a DB will use typescript language for better ORM stability.\x1b[0m\n\x1b[36mPress (M) for MondoDb or (S) for MySql: \x1b[0m")
            if (DBC.toLowerCase().trim() != "" && (DBC.toLowerCase().trim() == "m" || DBC.toLowerCase().trim() == "s")) userInputs.push(DBC.toLowerCase().trim())
            else {
                do {
                    console.log("");
                    console.log("\x1b[31mInvalid Input while choosing database.Try again!\x1b[0m");
                    DBC = await rl.question("\x1b[33mWhich database you want to install?\nNote: Using mysql as a DB will use typescript language for better ORM stability.\x1b[0m\n\x1b[36mPress (M) for MondoDb or (S) for MySql: \x1b[0m")
                } while (DBC.toLowerCase().trim() !== "m" && DBC.toLowerCase().trim() !== "s")
                userInputs.push(DBC.toLowerCase().trim());
            }
            console.log("");

            if (DBC.toLowerCase().trim() == "s") {

                 orm = await rl.question("\x1b[33mWhich orm you want to use?\x1b[0m\n\x1b[36mPress (P) for Prisma or (T) for Typeorm: \x1b[0m");
                 if (orm.toLowerCase().trim() != "" && (orm.toLowerCase().trim() == "t" || orm.toLowerCase().trim() == "p")) userInputs.push(orm.toLowerCase().trim())
                else {
                    do {
                        console.log("");
                        console.log("\x1b[31mInvalid Input while choosing orm.Try again!\x1b[0m");
                        orm = await rl.question("\x1b[33mWhich orm you want to use?\x1b[0m\n\x1b[36mPress (P) for Prisma or (T) for Typeorm: \x1b[0m");
                    } while (orm.toLowerCase().trim() !== "t" && orm.toLowerCase().trim() !== "p")
                    userInputs.push(orm.toLowerCase().trim());
                }
            }
            console.log("");
            let Auth = await rl.question("\x1b[33mDo you want to install jsonwebtoken for authentication?\x1b[0m\n\x1b[36mPress (Y) for Yes or (N) for No: \x1b[0m")
            if (Auth.toLowerCase().trim() != "" && (Auth.toLowerCase().trim() == "y" || Auth.toLowerCase().trim() == "n")) userInputs.push(Auth.toLowerCase().trim())
            else {
                do {
                    console.log("");
                    console.log("\x1b[31mInvalid Input while choosing Authentication.Try again!\x1b[0m");
                    Auth = await rl.question("\x1b[33mDo you want to install jsonwebtoken for authentication?\x1b[0m\n\x1b[36mPress (Y) for Yes or (N) for No: \x1b[0m")
                } while (Auth.toLowerCase().trim() !== "y" && Auth.toLowerCase().trim() !== "n")
                userInputs.push(Auth.toLowerCase().trim());
            }

            console.log("");
            let reqVal = await rl.question("\x1b[33mDo you want to include request validation?\x1b[0m\n\x1b[36mPress (Y) for Yes or (N) for No: \x1b[0m")

            if (reqVal.toLowerCase().trim() != "" && (reqVal.toLowerCase().trim() == "y" || reqVal.toLowerCase().trim() == "n")) userInputs.push(reqVal.toLowerCase().trim())
            else {
                do {
                    console.log("");  
                    console.log("\x1b[31mInvalid Input while choosing Validation.Try again!\x1b[0m");
                    reqVal = await rl.question("\x1b[33mDo you want to include request validation?\x1b[0m\n\x1b[36mPress (Y) for Yes or (N) for No: \x1b[0m")
                } while (reqVal.toLowerCase().trim() !== "y" && reqVal.toLowerCase().trim() !== "n")
                userInputs.push(reqVal.toLowerCase().trim());
            }
            Events.EmitMessage("provided", { Inputs: userInputs })
            rl.close();
        } catch (err) {
            console.log(`\x1b[31m${err}\x1b[0m`);
            process.exit(1);
        }
    }

    public static async DirName(): Promise<string> {
        try {
            let dirName: string;
            let rl;
            do {
                rl = createInterface({
                    input: process.stdin,
                    output: process.stdout
                })
                dirName = await rl.question("\x1b[33mEnter the directory name: \x1b[0m")
            }
            while (String(dirName).trim() == "" && String(dirName).trim() == null && String(dirName).trim() == undefined)
            rl.close();
            return Promise.resolve(String(dirName.trim()));
        } catch (err) {
            console.log(`\x1b[31m${err}\x1b[0m`);
            process.exit(1);
        }
    }
}
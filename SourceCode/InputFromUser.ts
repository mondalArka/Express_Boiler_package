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
            let DBC = await rl.question("Which database you want to install?\nNote: Using mysql as a DB will use typescript language for better ORM stability.\nPress (M) for MondoDb or (S) for MySql: ")
            if (DBC.trim() != "" && (DBC.trim() == "M" || DBC.trim() == "m" || DBC.trim() == "S" || DBC.trim() == "s")) userInputs.push(DBC)
            else {
                do {
                    console.log("\x1b[31mInvalid Input while choosing database.Try again!\x1b[0m");
                    DBC = await rl.question("Which database you want to install?\nNote: Using mysql as a DB will use typescript language for better ORM stability.\nPress (M) for MondoDb or (S) for MySql: ")
                } while (DBC.toLowerCase().trim() !== "m" && DBC.toLowerCase().trim() !== "s")
                userInputs.push(DBC);
            }
            console.log("");

            if (DBC.toLowerCase().trim() == "t") {

                 orm = await rl.question("Which orm you want to use?\nPress (P) for Prisma or (T) for Typeorm: ");
                 if (orm.toLowerCase().trim() != "" && (orm.toLowerCase().trim() == "t" || orm.toLowerCase().trim() == "p")) userInputs.push(orm)
                else {
                    do {
                        console.log("\x1b[31mInvalid Input while choosing orm.Try again!\x1b[0m");
                        orm = await rl.question("Which orm you want to use?\nPress (P) for Prisma or (T) for Typeorm: ");
                    } while (orm.toLowerCase().trim() !== "t" && orm.toLowerCase().trim() !== "p")
                    userInputs.push(orm);
                }
            }
            console.log("");
            const Auth = await rl.question("Do you want to install jsonwebtoken for authentication?\nPress (Y) for Yes or (N) for No: ")

            if (Auth.trim() != "" && (Auth.trim() == "y" || Auth.trim() == "Y" || Auth.trim() == "n" || Auth.trim() == "N")) userInputs.push(Auth)
            else {
                do {
                    console.log("\x1b[31mInvalid Input while choosing Authentication.Try again!\x1b[0m");
                    DBC = await rl.question("Do you want to install jsonwebtoken for authentication?\nPress (Y) for Yes or (N) for No: ")
                } while (DBC.toLowerCase().toLowerCase().trim() !== "y" && DBC.toLowerCase().toLowerCase().trim() !== "n")
                userInputs.push(DBC);
            }

            console.log("");
            const reqVal = await rl.question("Do you want to include request validation?\nPress (Y) for Yes or (N) for No: ")

            if (reqVal.trim() != "" && (reqVal.trim() == "y" || reqVal.trim() == "Y" || reqVal.trim() == "n" || reqVal.trim() == "N")) userInputs.push(reqVal)
            else {
                do {
                    console.log("\x1b[31mInvalid Input while choosing Validation.Try again!\x1b[0m");
                    DBC = await rl.question("Do you want to include request validation?\nPress (Y) for Yes or (N) for No: ")
                } while (DBC.toLowerCase().toLowerCase().trim() !== "y" && DBC.toLowerCase().toLowerCase().trim() !== "n")
                userInputs.push(DBC);
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
                dirName = await rl.question("Enter the directory name: ")
            }
            while (String(dirName).trim() == "" && String(dirName).trim() == null && String(dirName).trim() == undefined)
            rl.close();
            return Promise.resolve(String(dirName));
        } catch (err) {
            console.log(`\x1b[31m${err}\x1b[0m`);
            process.exit(1);
        }
    }
}
import { createInterface } from "readline/promises";
import { Events } from "./exports";
export default class inputs {
    public static async userInputs(): Promise<void> {
        let userInputs: Array<string> = []
        const rl = createInterface({
            input: process.stdin,
            output: process.stdout
        })
        const DBC = await rl.question("Which database you want to install?\nNote: Using mysql as a DB will use typescript language for better ORM stability.\nPress (M) for MondoDb or (S) for MySql: ")
        console.log("");
        const Auth = await rl.question("Do you want to install jsonwebtoken for authentication?\nPress (Y) for Yes or (N) for No: ")
        console.log("");
        const reqVal = await rl.question("Do you want to include request validation\nPress (Y) for Yes or (N) for No: ")

        if (DBC.trim() != "" && (DBC.trim() == "M" || DBC.trim() == "m" || DBC.trim() == "S" || DBC.trim() == "s")) userInputs.push(DBC)
        else {
            console.log("Invalid Input while choosing database!");
            process.exit(1);
        }
        if (Auth.trim() != "" && (Auth.trim() == "y" || Auth.trim() == "Y" || Auth.trim() == "n" || Auth.trim() == "N")) userInputs.push(Auth)
        else {
            console.log("Invalid Input while choosing authentication!");
            process.exit(1);
        }
        if (reqVal.trim() != "" && (reqVal.trim() == "y" || reqVal.trim() == "Y" || reqVal.trim() == "n" || reqVal.trim() == "N")) userInputs.push(reqVal)
        else {
            console.log("Invalid Input while choosing request validation!");
            process.exit(1);
        }
        Events.EmitMessage("provided", { Inputs: userInputs })
        rl.close();
    }
}
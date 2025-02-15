import { createInterface } from "readline/promises";
import { Events } from "./exports";
export default class inputs {
    public static async userInputs(): Promise<void> {
        let userInputs: Array<string> = []
        const rl = createInterface({
            input: process.stdin,
            output: process.stdout
        })
        const DBC = await rl.question("Which database you want to install?\nPress (M) for MondoDb or (S) for MySql: ")
        const Auth = await rl.question("Do you want to install jsonwebtoken for authentication?\nPress (Y) for Yes or (N) for No: ")

        if (DBC.trim() != "") userInputs.push(DBC)
        if (Auth.trim() != "") userInputs.push(Auth)
        Events.EmitMessage("provided", { Inputs: userInputs })
        rl.close();
    }
}
import { Run, Events, TakeInput } from "./exports";
import WriteAccToInput from "./writeFiles/app"
export default class PopulateFiles {
  public static async main(name:string): Promise<void> {
    PopulateFiles.listeners(name);
    Events.on("provided", ({ Inputs }) => {
      Run.RunScripts(Inputs,name)
    });
    await TakeInput.userInputs();
  }
  public static listeners(dirName:string): void {
    Events.on("provided", ({ Inputs }) => {
      Events.on("installed", async() => {
        await WriteAccToInput.Choice(Inputs,dirName);
      })
    })
  }
}


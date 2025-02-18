import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class controllerWriting {
    public static async writing(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname, "../", "templates", "ControllerWrite", "controllerContent.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/controllers/initialController.js`, reading)
    }
    public static async writingJWT(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname, "../", "templates", "ControllerWrite", "controllerContentJWT.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/controllers/initialController.js`, reading)
    }

    public static async writingSqlJWT(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname, "../", "templates", "ControllerWrite", "controllerContentTS.txt"))
            let str: string = reading.toString();
            str = str.replace(`public static async registration(req: Request, res: Response): Promise<void> {
      const data = await initialService.registerUser(req.body);
      res.status(data.status).json({ statusCode: data.status, message: data.message, response: data.response });
  }`, `public static async registration(req: Request, res: Response): Promise<void> {
      const data = await initialService.registerUser(req.body);
      res.status(data.status).json({ statusCode: data.status, message: data.message, response: data.response });
  }
  
  public static async login(req: Request, res: Response): Promise<void> {
    const data = await initialService.loginUser(req.body);
    res.status(200).json({
      statusCode: 200,
      message: "Successful login",
      data: data.response
    });
}`)

            str = str.replace(`public static async viewUser(req: Request, res: Response): Promise<void> {
      const { id } = req.params;
      const data = await initialService.getUser(id);
      res.status(data.status).json({ statusCode: data.status, message: data.message, response: data.response });
  }`, `public static async viewUser(req: Request, res: Response): Promise<void> {
      const { id } = req.user;
      const data = await initialService.getUser(id);
      res.status(data.status).json({ statusCode: data.status, message: data.message, response: data.response });
  }`)
            let index = await writeFile(process.cwd() + `/${dirName}/src/controllers/initialController.ts`, str)
    }

    public static async writingSql(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","ControllerWrite","controllerContentTS.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/controllers/initialController.ts`, reading)
    }
}


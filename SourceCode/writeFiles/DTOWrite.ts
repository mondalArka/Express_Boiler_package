import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class ReqValWrite {
    public static async writingMDB(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","ReqValidation","req.Validation.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/validators/authValidation.js`, reading)
    }

    public static async writingSQlJWTDTO(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","ReqValidation","req.ValidationTs.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/DTO/authDTO.ts`, reading)
    }

    public static async writingSQlDTO(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","ReqValidation","req.ValidationTs.txt"))
            let str: string = reading.toString("utf-8");
            str = str.replace(`export class LoginDTO {

    @IsNotEmpty()
    @IsString()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string
}`,"")
            let index = await writeFile(process.cwd() + `/${dirName}/src/DTO/authDTO.ts`, str)
    }

    public static async writingSQlValMidd(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","TsValidation","validation.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/src/middleware/validation.ts`, reading)
    }
}
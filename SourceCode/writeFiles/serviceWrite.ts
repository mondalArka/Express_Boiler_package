import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class serviceWriting {
    public static async ServiceMongoWriting(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","ServiceWrite","serviceMongoContent.txt"))
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/services/initialService.js`, reading)
    }

    public static async ServiceMongoWritingJWT(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","ServiceWrite","serviceContentJWT.txt"))
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/services/initialService.js`, reading)
    }

    public static async ServiceMySqlWriting(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","ServiceWrite","serviceMySqlContent.txt"))
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/services/initialService.ts`, reading)
    }

    public static async ServiceMySqlWritingWithJWT(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","ServiceWrite","serviceMySqlContent.txt"))
            let str: string = reading.toString("utf-8");
            str= str.replace(`import { compare} from "bcrypt";`,`import { compare } from "bcrypt";\nimport JWTService from "../utils/jwt";`)
            str= str.replace(`});
  return  {status:201,message:"Successful registration",response:{}}
  }`, `});
  return  {status:201,message:"Successful registration",response:{}}
  }
  
  public static async loginUser(body:User): Promise<response> {
        let data = await prisma.user.findUnique({
      where: { email: body.email },
    });
        if (!data) throw new Error("User not found!")
        if (!await compare(body.password, data.password)) throw new Error("Wrong Password!")
        let token = JWTService.generateToken({ id: data.id, email: data.email })

        return { status:200,message:"Fetched user data",response:{user:data,token:token}}
    }`)

    str=str.replace(`import { compare, hash} from "bcrypt";`,`import { compare, hash} from "bcrypt";\nimport  JWTService  from "../utils/jwt"`)
            let index: void = await writeFile(process.cwd() + `/${dirName}/src/services/initialService.ts`, str)
    }

    public static async ServiceMySqlTypeormJWTWriting(dirName:string): Promise<void> {
        let reading: Buffer = await readFile(path.join(__dirname,"../","templates","ServiceWrite","serviceTypeorm.txt"))
        let index: void = await writeFile(process.cwd() + `/${dirName}/src/services/initialService.ts`, reading)
}

public static async ServiceMySqlTypeormWriting(dirName:string): Promise<void> {
        let reading: Buffer = await readFile(path.join(__dirname,"../","templates","ServiceWrite","serviceTypeorm.txt"));
        let str:string= reading.toString("utf-8");

        str= str.replace(`import { compare } from "bcrypt";
import JWTService from "../utils/jwt";`,"")
        str =str.replace(`    public static async loginUser(body:User): Promise<response> {
        let data = await User.findOne({where:{email:body.email}});
        if (!data) throw new Error("User not found!")
        if (!await compare(body.password, data.password)) throw new Error("Wrong Password!")
        let token = JWTService.generateToken({ id: data.id, email: data.email })

        return { status:200,message:"Fetched user data",response:{user:data,token:token}}
    }
`,"");
        let index: void = await writeFile(process.cwd() + `/${dirName}/src/services/initialService.ts`, str)
}
}


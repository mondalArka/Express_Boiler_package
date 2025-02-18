import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class prismaSchemaWrite {
    public static async PrismaSchemaWriting(dirName:string): Promise<void> {
            let reading: Buffer = await readFile(path.join(__dirname,"../","templates","prismaSchemaWrite","prismaSchema.txt"))
            let index:void = await writeFile(process.cwd() + `/${dirName}/prisma/schema.prisma`, reading)
    }
}
import { writeFile, readFile } from "fs/promises";
import * as path from "path";
export default class prismaSchemaWrite {
    public static async PrismaSchemaWriting(dirName:string): Promise<void> {
        try {
            let reading = await readFile(path.join(__dirname,"../","templates","prismaSchemaWrite","prismaSchema.txt"))
            let index = await writeFile(process.cwd() + `/${dirName}/prisma/schema.prisma`, reading)
            console.log("Finished writing prismaSchema.schema");
        } catch (err) {
            console.log("Error in writing prismaSchema file!", err);
        }
    }
}
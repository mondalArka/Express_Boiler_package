import {
    authWriting,
    indexWriting,
    configWriting,
    jwtWriting,
    serviceWriting,
    modelWriting,
    envWriting,
    controllerWriting,
    routesWriting,
    prismaHashWrite,
    prismaSchemaWrite,
    tsConfigWriting,
    interfaces
} from "./writeExport";
import { CommomModuleInvoke } from "./writeExport";
export default class WriteAccToInput {
    public static async Choice(inputs: Array<string>,dirName:string): Promise<void> {
        // Db selection
        switch (inputs[0]) {
            case 'm':
            case 'M':
                if (inputs[1] == "y" || inputs[1] == "Y") {
                    await jwtWriting.jwtMongoWriting(dirName);
                    await authWriting.AuthWriting(dirName);
                    await controllerWriting.writingJWT(dirName);
                    await serviceWriting.ServiceMongoWritingJWT(dirName);
                    await routesWriting.writingJWT(dirName);
                    await envWriting.EnvMongoWritingJWT(dirName);
                } else {
                    await controllerWriting.writing(dirName);
                    await serviceWriting.ServiceMongoWriting(dirName);
                    await routesWriting.writing(dirName);
                    await envWriting.EnvMongoWriting(dirName);
                }
                await configWriting.mongoDBWriting(dirName);
                await indexWriting.IndexMongoWriting(dirName);
                await CommomModuleInvoke.invokeMDB(dirName);
                await modelWriting.mongoModelWriting(dirName);
                break;

            case 's':
            case 'S':
                if (inputs[1] == "y" || inputs[1] == "Y") {
                    await jwtWriting.jwtSqlWriting(dirName);
                    await authWriting.AuthWritingSql(dirName);
                    await serviceWriting.ServiceMySqlWritingWithJWT(dirName);
                    await controllerWriting.writingSqlJWT(dirName);
                    await routesWriting.writingSqlJWT(dirName);
                    await envWriting.EnvMySqlWritingJWT(dirName);
                    await prismaHashWrite.PrismaHashWriting(dirName);
                    await prismaSchemaWrite.PrismaSchemaWriting(dirName);
                } else {
                    await controllerWriting.writingSql(dirName);
                    await serviceWriting.ServiceMySqlWriting(dirName);
                    await routesWriting.writingSql(dirName);
                    // await envWriting.EnvMySqlWriting();
                    await prismaHashWrite.PrismaHashWriting(dirName);
                    await prismaSchemaWrite.PrismaSchemaWriting(dirName);
                }
                await indexWriting.IndexSqlWriting(dirName);
                await CommomModuleInvoke.invokeSql(dirName);
                await tsConfigWriting.tsConfigWriting(dirName);
                await interfaces.interfaceWriting(dirName);
                break;
        }
    }
}
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
    interfaces,
    ReqValWrite,
    CommomModuleInvoke
} from "./writeExport";
import { Events } from "../exports";
export default class WriteAccToInput {
    public static async Choice(inputs: Array<string>, dirName: string): Promise<void> {
        try {
            // Db selection
            switch (inputs[0]) {
                case 'm':
                case 'M':
                    if (inputs[1] == "y" || inputs[1] == "Y") {
                        await routesWriting.writingJWT(dirName);
                        if (inputs[2] == "Y" || inputs[2] == "y") {
                            await Promise.all([
                                routesWriting.writingJWTReqVal(dirName),
                                ReqValWrite.writingMDB(dirName)
                            ])
                            // await routesWriting.writingJWTReqVal(dirName);
                            // await ReqValWrite.writingMDB(dirName);
                        }

                        await Promise.all([
                            jwtWriting.jwtMongoWriting(dirName),
                            authWriting.AuthWriting(dirName),
                            controllerWriting.writingJWT(dirName),
                            serviceWriting.ServiceMongoWritingJWT(dirName),
                            envWriting.EnvMongoWritingJWT(dirName)
                        ])
                        // await jwtWriting.jwtMongoWriting(dirName);
                        // await authWriting.AuthWriting(dirName);
                        // await controllerWriting.writingJWT(dirName);
                        // await serviceWriting.ServiceMongoWritingJWT(dirName);
                        // await envWriting.EnvMongoWritingJWT(dirName);

                    } else {
                        await routesWriting.writing(dirName);
                        if (inputs[2] == "Y" || inputs[2] == "y") {
                            await Promise.all([
                                routesWriting.writingReqVal(dirName),
                                ReqValWrite.writingMDB(dirName)
                            ])
                            // await routesWriting.writingReqVal(dirName);
                            // await ReqValWrite.writingMDB(dirName);
                        }
                        await Promise.all([
                            controllerWriting.writing(dirName),
                            serviceWriting.ServiceMongoWriting(dirName),
                            envWriting.EnvMongoWriting(dirName)
                        ])
                        // await controllerWriting.writing(dirName);
                        // await serviceWriting.ServiceMongoWriting(dirName);
                        // await envWriting.EnvMongoWriting(dirName);
                    }
                    await Promise.all([
                        configWriting.mongoDBWriting(dirName),
                        indexWriting.IndexMongoWriting(dirName),
                        CommomModuleInvoke.invokeMDB(dirName),
                        modelWriting.mongoModelWriting(dirName)
                    ])
                    // await configWriting.mongoDBWriting(dirName);
                    // await indexWriting.IndexMongoWriting(dirName);
                    // await CommomModuleInvoke.invokeMDB(dirName);
                    // await modelWriting.mongoModelWriting(dirName);
                    Events.EmitMessage("done", {});
                    break;

                case 's':
                case 'S':
                    if (inputs[1] == "y" || inputs[1] == "Y") {
                        await routesWriting.writingSqlJWT(dirName);
                        if (inputs[2] == "Y" || inputs[2] == "y") {
                            await Promise.all([
                                routesWriting.writingSqlJWTReqval(dirName),
                                ReqValWrite.writingSQlValMidd(dirName),
                                ReqValWrite.writingSQlJWTDTO(dirName)
                            ])
                            // await routesWriting.writingSqlJWTReqval(dirName);
                            // await ReqValWrite.writingSQlValMidd(dirName);
                            // await ReqValWrite.writingSQlJWTDTO(dirName)
                        }
                        await Promise.all([
                            jwtWriting.jwtSqlWriting(dirName),
                            authWriting.AuthWritingSql(dirName),
                            serviceWriting.ServiceMySqlWritingWithJWT(dirName),
                            controllerWriting.writingSqlJWT(dirName),
                            envWriting.EnvMySqlWritingJWT(dirName),
                            prismaHashWrite.PrismaHashWriting(dirName),
                            prismaSchemaWrite.PrismaSchemaWriting(dirName)
                        ])
                        // await jwtWriting.jwtSqlWriting(dirName);
                        // await authWriting.AuthWritingSql(dirName);
                        // await serviceWriting.ServiceMySqlWritingWithJWT(dirName);
                        // await controllerWriting.writingSqlJWT(dirName);
                        // // await routesWriting.writingSqlJWT(dirName);
                        // await envWriting.EnvMySqlWritingJWT(dirName);
                        // await prismaHashWrite.PrismaHashWriting(dirName);
                        // await prismaSchemaWrite.PrismaSchemaWriting(dirName);
                    } else {
                        await routesWriting.writingSql(dirName);
                        if (inputs[2] == "Y" || inputs[2] == "y") {
                            await Promise.all([
                                routesWriting.writingSqlReqval(dirName),
                                ReqValWrite.writingSQlValMidd(dirName),
                                ReqValWrite.writingSQlDTO(dirName)
                            ])
                            // await routesWriting.writingSqlReqval(dirName);
                            // await ReqValWrite.writingSQlValMidd(dirName);
                            // await ReqValWrite.writingSQlDTO(dirName)
                        }
                        await Promise.all([
                            controllerWriting.writingSql(dirName),
                            serviceWriting.ServiceMySqlWriting(dirName),
                            // await routesWriting.writingSql(dirName);
                            // await envWriting.EnvMySqlWriting();
                            prismaHashWrite.PrismaHashWriting(dirName),
                            prismaSchemaWrite.PrismaSchemaWriting(dirName)
                        ])
                        // await controllerWriting.writingSql(dirName);
                        // await serviceWriting.ServiceMySqlWriting(dirName);
                        // // await routesWriting.writingSql(dirName);
                        // // await envWriting.EnvMySqlWriting();
                        // await prismaHashWrite.PrismaHashWriting(dirName);
                        // await prismaSchemaWrite.PrismaSchemaWriting(dirName);
                    }
                    await Promise.all([
                        indexWriting.IndexSqlWriting(dirName),
                        CommomModuleInvoke.invokeSql(dirName),
                        tsConfigWriting.tsConfigWriting(dirName),
                        interfaces.interfaceWriting(dirName)
                    ])
                    // await indexWriting.IndexSqlWriting(dirName);
                    // await CommomModuleInvoke.invokeSql(dirName);
                    // await tsConfigWriting.tsConfigWriting(dirName);
                    // await interfaces.interfaceWriting(dirName);
                    Events.EmitMessage("done", {});
                    break;
            }
        } catch (err) {
            console.log("\x1b[31mError in writing files!\x1b[0m");
            console.log(`\x1b[31m${err}\x1b[0m`);
            process.exit(1);
        }
    }
}
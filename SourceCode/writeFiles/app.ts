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
                        }

                        await Promise.all([
                            jwtWriting.jwtMongoWriting(dirName),
                            authWriting.AuthWriting(dirName),
                            controllerWriting.writingJWT(dirName),
                            serviceWriting.ServiceMongoWritingJWT(dirName),
                            envWriting.EnvMongoWritingJWT(dirName)
                        ])

                    } else {
                        await routesWriting.writing(dirName);
                        if (inputs[2] == "Y" || inputs[2] == "y") {
                            await Promise.all([
                                routesWriting.writingReqVal(dirName),
                                ReqValWrite.writingMDB(dirName)
                            ])
                        }
                        await Promise.all([
                            controllerWriting.writing(dirName),
                            serviceWriting.ServiceMongoWriting(dirName),
                            envWriting.EnvMongoWriting(dirName)
                        ])
                    }
                    await Promise.all([
                        configWriting.mongoDBWriting(dirName),
                        indexWriting.IndexMongoWriting(dirName),
                        CommomModuleInvoke.invokeMDB(dirName),
                        modelWriting.mongoModelWriting(dirName)
                    ])
                    Events.EmitMessage("done", {});
                    break;

                case 's':
                case 'S':
                    if(inputs[1].toLowerCase()=="t"){
                        if (inputs[2] == "y" || inputs[2] == "Y") {
                            await routesWriting.writingSqlJWT(dirName);
                            if (inputs[3] == "Y" || inputs[3] == "y") {
                                await Promise.all([
                                    routesWriting.writingSqlJWTReqval(dirName),
                                    ReqValWrite.writingSQlValMidd(dirName),
                                    ReqValWrite.writingSQlJWTDTO(dirName),
                                ])
                            }else{
                                await Promise.all([
                                    routesWriting.writingSqlJWT(dirName),
                                ])
                            }
                            await Promise.all([
                                jwtWriting.jwtSqlWritingTypeorm(dirName),
                                authWriting.AuthWritingSql(dirName),
                                controllerWriting.writingSqlJWT(dirName),
                                envWriting.EnvMySqlWritingTypeJWt(dirName),
                                serviceWriting.ServiceMySqlTypeormJWTWriting(dirName)
                            ])
                        } else {
                            await routesWriting.writingSql(dirName);
                            if (inputs[3] == "Y" || inputs[3] == "y") {
                                await Promise.all([
                                    routesWriting.writingSqlReqval(dirName),
                                    ReqValWrite.writingSQlDTO(dirName),
                                    ReqValWrite.writingSQlValMidd(dirName),
                                ])
                            }else{
                                await Promise.all([
                                    routesWriting.writingSql(dirName),
                                ])
                            }
                            await Promise.all([
                                controllerWriting.writingSql(dirName),
                                envWriting.EnvMySqlWritingType(dirName),
                                serviceWriting.ServiceMySqlTypeormWriting(dirName)
                            ])
                        }
                        Promise.all([
                            modelWriting.sqlModelWriting(dirName),
                            configWriting.typeorm(dirName),
                            modelWriting.sqlModelWriting(dirName),
                            indexWriting.IndexSqlTypeormWriting(dirName)
                        ])
                    }else{
                        if (inputs[2] == "y" || inputs[2] == "Y") {
                            await routesWriting.writingSqlJWT(dirName);
                            if (inputs[3] == "Y" || inputs[3] == "y") {
                                await Promise.all([
                                    routesWriting.writingSqlJWTReqval(dirName),
                                    ReqValWrite.writingSQlValMidd(dirName),
                                    ReqValWrite.writingSQlJWTDTO(dirName)
                                ])
                            }else{
                                await Promise.all([
                                    routesWriting.writingSqlJWT(dirName),
                                ])
                            }

                            await Promise.all([
                                authWriting.AuthWritingSql(dirName),
                                jwtWriting.jwtSqlWritingPrisma(dirName),
                                serviceWriting.ServiceMySqlWritingWithJWT(dirName),
                                envWriting.EnvMySqlWritingJWT(dirName),
                                controllerWriting.writingSqlJWT(dirName)
                            ])
                        } else {
                            await routesWriting.writingSql(dirName);
                            if (inputs[3] == "Y" || inputs[3] == "y") {
                                await Promise.all([
                                    routesWriting.writingSqlReqval(dirName),
                                    ReqValWrite.writingSQlValMidd(dirName),
                                    ReqValWrite.writingSQlDTO(dirName)
                                ])
                            }else{
                                await Promise.all([
                                    routesWriting.writingSql(dirName),
                                ])
                            }
                            await Promise.all([
                                controllerWriting.writingSql(dirName),
                                serviceWriting.ServiceMySqlTypeormWriting(dirName),
                            ])
                        }
                        await Promise.all([
                            prismaSchemaWrite.PrismaSchemaWriting(dirName),
                            prismaHashWrite.PrismaHashWriting(dirName)
                        ])
                    }
                    await Promise.all([
                        CommomModuleInvoke.invokeSql(dirName),
                        tsConfigWriting.tsConfigWriting(dirName),
                        interfaces.interfaceWriting(dirName),
                        
                    ])
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
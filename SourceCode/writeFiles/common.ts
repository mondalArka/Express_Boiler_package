import {
    errorHandlerWriting,
    apiRouterWriting,
    indexRouterWriting,
    promiseWriting
} from "./writeExport";

export default class CommomModuleInvoke {
    public static async invokeMDB(dirName: string): Promise<void> {
       await Promise.all([
            errorHandlerWriting.writing(dirName),
            apiRouterWriting.writing(dirName),
            indexRouterWriting.writing(dirName),
            promiseWriting.writing(dirName)
        ])
    }

    public static async invokeSql(dirName: string): Promise<void> {
       await Promise.all([
            errorHandlerWriting.writingSql(dirName),
            apiRouterWriting.writingSql(dirName),
            indexRouterWriting.writingSql(dirName),
            promiseWriting.writingSql(dirName)
        ])
    }
}
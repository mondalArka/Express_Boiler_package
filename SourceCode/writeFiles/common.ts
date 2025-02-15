import {
    errorHandlerWriting,
    apiRouterWriting,
    indexRouterWriting,
    promiseWriting
} from "./writeExport";

export default class CommomModuleInvoke {
    public static async invokeMDB(dirName:string): Promise<void> {
        // await controllerWriting.writing();
        await errorHandlerWriting.writing(dirName);
        await apiRouterWriting.writing(dirName);
        await indexRouterWriting.writing(dirName);
        await promiseWriting.writing(dirName);
    }

    public static async invokeSql(dirName:string): Promise<void> {
        // await controllerWriting.writing();
        await errorHandlerWriting.writingSql(dirName);
        await apiRouterWriting.writingSql(dirName);
        await indexRouterWriting.writingSql(dirName);
        await promiseWriting.writingSql(dirName);
    }
}
import checkDir from "./CheckDir";
import create from "./RunScripts";
import Execution from "./Exec";
import packageModify from "./osPackageInstall";
import npmInitalize from "./osNpminitialize";
import Events from "./EventHandling";
import inputs from "./InputFromUser";
import prismaInit from "./PrismaInit";
import packMod from "./PackageScripts";
import typeorm from "./typeorm";

export { Execution as ExecuteSh }
export { checkDir as ExistDir }
export { create as Run }
export { packageModify as PackageModifier }
export { npmInitalize as npmInstall }
export { Events as Events }
export { inputs as TakeInput }
export { prismaInit as prismaInit }
export { packMod as packMod }
export { typeorm as typeorm }



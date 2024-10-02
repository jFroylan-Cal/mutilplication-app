import { yarg } from "./config/plugins/yargs.plugin";
import { serverApp } from "./presentation/server-app";

(async () => {   
    await main();
})();

async function main() {
    const { b:base, l:limit, s:show, O:outputPath, f:fileName } = yarg;
    serverApp.run({base, limit, showTable: show, outputPath, fileName});
}
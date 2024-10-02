//import fs from "fs" to create file or folders
import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

const { b:base, l:limit, s:show } = yarg;

let output = "";
const header = `
=====================
Tabla del ${base}
=====================\n
`;

for (let i = 1; i < limit; i++) {
    output += base + " x " + i + " = " + base * i + "\n";
}
output = header + output;
if (show) {
    console.log(output);
}
const outputPath = `output`;
//create output folder
fs.mkdirSync(outputPath, { recursive: true });
//write file
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, output);
console.log('file created');

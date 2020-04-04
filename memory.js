const memoryjs = require('memoryjs');
const processName = "RotMG Exalt.exe";
const process = memoryjs.openProcess(processName);
const clientModule = memoryjs.findModule("GameAssembly.dll", process.th32ProcessID);
let Mem = {}
Mem.module = clientModule
Mem.process = process
module.exports = Mem
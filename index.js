import { log } from "node:console";
import { EventEmitter } from "node:events";

//create class
class AUKEmitter extends EventEmitter {}

//create object
const emiterObj = new AUKEmitter();

//create event
emiterObj.on('eName',()=>{
    log("Event fired");
})

emiterObj.emit('eName');
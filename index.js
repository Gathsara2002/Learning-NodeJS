import { log } from "node:console";
import { EventEmitter } from "node:events";

//create class
class AUKEmitter extends EventEmitter {}

//create object
const emiterObj = new AUKEmitter();

//create event
emiterObj.on('onClick1',()=>{
    log("Event1 fired");
})

//create event that only run once
emiterObj.once('onClick2',()=>{
    log("Event2 fired");
})

//fire event
emiterObj.emit('onClick1');
emiterObj.emit('onClick1');
emiterObj.emit('onClick2');
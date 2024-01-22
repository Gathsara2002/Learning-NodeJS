import { log } from "node:console";
import { EventEmitter } from "node:events";

//create class
class AUKEmitter extends EventEmitter {
    constructor(city,age){
        super();
        this.city=city;
        this.age=age;
    
    }
}

//create object
const emiterObj = new AUKEmitter("Galle","22");

//create event
emiterObj.on('onClick1',()=>{
    log("Event1 fired");
})

//create event that only run once
emiterObj.once('onClick2',()=>{
    log("Event2 fired");
})

const myFunc=()=>{
    log("Event trigger");
}

emiterObj.addListener('onClick3',myFunc);

//fire event
emiterObj.emit('onClick1');
emiterObj.emit('onClick1');
emiterObj.emit('onClick2');

//remove event
emiterObj.removeAllListeners('onClick1');
emiterObj.emit('onClick1');

emiterObj.emit('onClick3');
emiterObj.removeListener
emiterObj.emit('onClick3');

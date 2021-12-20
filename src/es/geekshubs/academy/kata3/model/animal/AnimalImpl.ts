import { Animal } from "./Animal"

export class AnimalImpl implements Animal {

    constructor(public name:string ) { }
    
    move(meters: number) {
        var msg = this.name + " moved " + meters + "m.";
        console.log(msg);
    }
}

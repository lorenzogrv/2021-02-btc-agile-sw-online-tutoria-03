import { Animal } from "./model/animal/Animal"
import { AnimalImpl } from "./model/animal/AnimalImpl"

export class Service {
    
    repository = new Repository();

    constructor() {
    }

    get(index:number) : Animal{
        return this.repository.list[index];
    }

    put(animal: Animal) : number {
        return this.repository.list.push(animal);
    }

    deleteFirst() : Animal {
        return this.repository.list.shift()!;
    }

    deleteLast() : Animal {
        return this.repository.list.pop()!;
    }
}

export class Snake extends Animal {

    constructor( name : string ) { super(name); }

    move() {
        console.log("Slithering...");
        super.move(30);
    }
}

export class Repository {

    list = new Array<Animal>()

    constructor() {
        this.prepare();
    }

    private prepare() : void {
        this.list.push(new Horse("Horse-1"));
        this.list.push(new Animal("Animal-1"));
        this.list.push(new Snake("Snake-1"));
        this.list.push(new Horse("Horse-2"));
        this.list.push(new Animal("Animal-2"));
        this.list.push(new Snake("Snake-2"));
        this.list.push(new Horse("Horse-3"));
        this.list.push(new Snake("Snake-3"));
        this.list.push(new Animal("Animal-3"));
        this.list.push(new Horse("Snake-4"));
    }   
    
    getList() : Array<Animal> {
        return this.list;
    }
}

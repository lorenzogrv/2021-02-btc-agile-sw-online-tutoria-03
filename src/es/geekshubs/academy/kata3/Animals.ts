export class _Service {
    
    repository = new _Repository();

    constructor() {
    }

    get(index:number) : _Animal{
        return this.repository.list[index];
    }

    put(animal: _Animal) : number {
        return this.repository.list.push(animal);
    }

    deleteFirst() : _Animal {
        return this.repository.list.shift()!;
    }

    deleteLast() : _Animal {
        return this.repository.list.pop()!;
    }
}

export class _Animal {

    constructor(public name:string ) { }
    
    move(meters: number) {
        var msg = this.name + " moved " + meters + "m.";
        console.log(msg);
    }
}

export class _Snake extends _Animal {

    constructor( name : string ) { super(name); }

    move() {
        console.log("Slithering...");
        super.move(30);
    }
}

export class _Horse extends _Animal {
   
    constructor( name : string ) { super(name); }

    move()  {
        console.log("Galloping...");
        super.move(45);
    }
}

export class _Repository {

    list = new Array<_Animal>()

    constructor() {
        this.prepare();
    }

    private prepare() : void {
        this.list.push(new _Horse("Horse-1"));
        this.list.push(new _Animal("Animal-1"));
        this.list.push(new _Snake("Snake-1"));
        this.list.push(new _Horse("Horse-2"));
        this.list.push(new _Animal("Animal-2"));
        this.list.push(new _Snake("Snake-2"));
        this.list.push(new _Horse("Horse-3"));
        this.list.push(new _Snake("Snake-3"));
        this.list.push(new _Animal("Animal-3"));
        this.list.push(new _Horse("Snake-4"));
    }   
    
    getList() : Array<_Animal> {
        return this.list;
    }
}
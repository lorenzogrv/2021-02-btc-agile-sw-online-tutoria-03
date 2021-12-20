import { AnimalImpl } from "../animal/AnimalImpl"

export class Horse extends Animal {
    constructor (name: string) {
      super(name)
    }

    move ()  {
      return "Galloping..." + super.move(45);
    }
}

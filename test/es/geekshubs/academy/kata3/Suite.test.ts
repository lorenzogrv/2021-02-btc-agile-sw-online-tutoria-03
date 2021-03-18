import {
  Animal, Horse, Snake
}  from "../../../../../src/es/geekshubs/academy/kata3/Animals"

describe('Testing', function (){

    test('Animal name', function () {
        //Arrange
        var expected = "Animal-1";
        //Act
        var result = new Animal("Animal-1");
        //Assert
        expect(result.name).toBe(expected);
    });

    test('Horse name', function () {
        //Arrange
        var expected = "Horse-1";
        //Act
        var result = new Horse("Horse-1");
        //Assert
        expect(result.name).toBe(expected);
    });

    test('Snake name', function () {
        //Arrange
        var expected = "Snake-1";
        //Act
        var result = new Snake("Snake-1");
        //Assert
        expect(result.name).toBe(expected);
    });

});

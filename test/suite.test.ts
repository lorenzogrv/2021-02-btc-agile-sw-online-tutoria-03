import { _Animal }  from "../src/es/geekshubs/academy/kata3/Animals"
import { _Horse }  from "../src/es/geekshubs/academy/kata3/Animals"
import { _Snake }  from "../src/es/geekshubs/academy/kata3/Animals"

describe('Testing', function (){

    test('_Animal name', function () {
        //Arrange
        var expected = "Animal-1";
        //Act
        var result = new _Animal("Animal-1");
        //Assert
        expect(result.name).toBe(expected);
    });

    test('_Horse name', function () {
        //Arrange
        var expected = "Horse-1";
        //Act
        var result = new _Horse("Horse-1");
        //Assert
        expect(result.name).toBe(expected);
    });

    test('_Snake name', function () {
        //Arrange
        var expected = "Snake-1";
        //Act
        var result = new _Snake("Snake-1");
        //Assert
        expect(result.name).toBe(expected);
    });

});

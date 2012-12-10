
describe("Testing event keypress with key_enter 13", function(){

    var e = jQuery.Event("keydown", { keyCode: 13 });


    $('canvas').onkeypress(function(e)
    {
        if (e.keyCode == 13)
        {
            alert('Enter was pressed.');
        }
    } ) ;

    describe("Fizz Buzz", function(){
        it("numero igual a tres deve retornar fizz", function(){
            expect(fizzbuzz(3)).toEqual("fizz");
        });
    });

    describe()
};
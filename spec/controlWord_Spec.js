
describe("controlWord", function(){

    it("tem uma letra", function() {
        var control = new controlWord("T");
        expect(control.word()).toEqual("T");
    });



});
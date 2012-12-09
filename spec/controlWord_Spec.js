describe("ControlWord", function(){

    it("has word T", function() {
        var control = new ControlWord("A");
        expect(control.word()).toEqual("T");
    });


});
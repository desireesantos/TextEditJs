
describe("ControlWord", function(){


    it("word is not null", function() {
        control = new ControlWord("A");
        expect(control.Word()).not.toBeNull();
    });

    it("word is not empty", function() {
        control = new ControlWord("A");
        expect(control.Word()).toNotEqual(" ");
    });


});

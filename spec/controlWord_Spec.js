
describe("ControlWord", function(){


    it("word is not null", function() {
        control =  ControlWord("A");
        expect(control.Word()).not.toBeNull();
    });

    it("word is not empty", function() {
        control =  ControlWord("A");
        expect(control.Word()).toNotEqual(" ");
    });

});

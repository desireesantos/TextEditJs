

describe("ControlWord", function(){

    it("Word is A", function() {
        control = new ControlWord("A");
        expect(control.Word()).toEqual("A");
    });

    it("word is not null", function() {
        control = new ControlWord("A");
        expect(control.Word()).not.toBeNull();
    });


});



describe("ControlWord", function(){

    it("Testing get into word", function() {
        control = new ControlWord("A");
        expect(control.Word()).toEqual("A");
    });


});
describe("Control Word", function(){
    it("tem uma letra", function() {
        var control = new controlWord("T");
        expect(control.word("T")).toEqual("T");
    });


});
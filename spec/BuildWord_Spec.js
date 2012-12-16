describe("Build Word", function(){

   var temp = new Array();
    temp.push("a");
    temp.push("b");



    it("Yes I push word ?", function() {
        control = new BuildWord(temp);
        expect(control.addWord()).toBeTruthy();
    });

    it("Pushing words", function() {
        control = new BuildWord(temp);
        control.push("d");
        control.addWord("c");
        control.addWord("c");
        expect(control.toString()).toEqual("a,b,d,c,c");
    });

    it("Popping words", function() {
        control = new BuildWord(temp);
        control.addWord("c");
        control.addWord("c");
        control.removeLastWord();
        control.removeLastWord();
        expect(control.toString()).toEqual("a,b");
    });


});
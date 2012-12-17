describe("BuildWord", function(){

   var WordsArray = new Array();
    WordsArray.push("a");
    WordsArray.push("b");



    it("Return true when add word", function() {
        control = BuildWord(WordsArray);
        expect(control.addWord()).toBeTruthy();
    });

    it("Check new word after called addWord()", function() {
        control = BuildWord(WordsArray);
        control.push("d");
        control.addWord("c");
        control.addWord("c");
        expect(control.toString()).toEqual("a,b,d,c,c");
    });

    it("Remove last word", function() {
        control = BuildWord(WordsArray);
        control.addWord("c");
        control.addWord("c");
        control.removeLastWord();
        control.removeLastWord();
        expect(control.toString()).toEqual("a,b");
    });



});
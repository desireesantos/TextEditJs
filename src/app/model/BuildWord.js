
BuildWord = function(ArrayWord , word)
{
    var arrayWords = Array(ArrayWord);


   function BuildWord(ArrayWord,word) {

        this.addWord (word);
    };


    arrayWords.addWord = function(word){

        arrayWords.push(word);
        return "true";
    };


    arrayWords.removeLastWord = function(){

        arrayWords.pop();
        return "true";
    };


    return arrayWords;

};



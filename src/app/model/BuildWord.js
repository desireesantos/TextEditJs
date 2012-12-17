
BuildWord = function(ArrayWord , word)
{

    var arrayWords = new Array(ArrayWord, word);

    arrayWords.addWord = function(){

        arrayWords.push(word);
        return "true";
    };


    arrayWords.removeLastWord = function(){

        arrayWords.pop();
        return "true";
    };


    return arrayWords;

};



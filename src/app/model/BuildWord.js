
BuildWord = function(ArrayWord)
{

    var arrayWords = new Array(ArrayWord);

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




var Line = function(word)
{

    var line =[];

    this.insertInLine = function(word){

        return line.push(word);

    }


    this.lastWord = function(word){

        return line[line.length];

    }

};




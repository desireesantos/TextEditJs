
 var Word = function(keyId) {

    var words = [];
    var line = new Line("B");

     this.insertWord = function ()
     {


         words = line.insertWordInLine();
         return true;


     }


     this.lastWord = function ()
     {

         return words[words.length];


     }

    var translateUnicodeToCode = function(){

        return String.fromCharCode(keyId);

    }


};




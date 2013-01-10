
 var Word = function(key) {

    var words;

     this.insertWord = function ()
     {

         var line = new Line();
           words = line.insertInLine(translateUnicodeToCode());
         return true;


     }


     this.lastWord = function ()
     {

         return words[words.length];


     }

   var translateUnicodeToCode = function(){

        return String.fromCharCode(key);

    }


};





 var Word = function(key) {



     this.insertWord = function ()
     {

         var line = new Line();
         line.insertInLine(translateUnicodeToCode());


     }

   var translateUnicodeToCode = function(){

        return String.fromCharCode(key);

    }

};




    document.onkeypress = keyPress;

    var context = document.getElementById("canvas").getContext("2d");
    var keyId = event.keyCode;



    function keyPress()

    {

        var word = new Word(keyId);
        word.insertWord();


    }



    document.onkeydown = keyDown;



    function keyDown()

    {

        var word = new EspecialKeys(keyId);
        word.insertWord();


    }

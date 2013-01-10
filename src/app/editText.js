    document.onkeypress = KeyPress;

    var context = document.getElementById("canvas").getContext("2d");
    var keyId = event.keyCode;
    var word = Word(keyId);


    function KeyPress()

    {
        word.insertWord();
        context.fillText(word.lastWord(), 230,180 )

    }



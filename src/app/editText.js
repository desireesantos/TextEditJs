    document.onkeypress = KeyPress;

    var context = document.getElementById("canvas").getContext("2d");
    var keyId = event.keyCode;


    function KeyPress()

    {
        var word = new Word(keyId);
        word.insertWord();

        context.fillText(word.lastWord(),200,200);
    }



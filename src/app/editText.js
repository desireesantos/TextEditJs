    document.onkeypress = KeyPress;

    var context = document.getElementById("canvas").getContext("2d");
    var keyId = event.keyCode;
    var control = ControlWord(keyId);
    var word = Word(keyId);


    function KeyPress()

    {
        if(control.isPermitedKeyPress()){

            word.addWordInLine(word.translateTocharCode());
        }

    }


    document.onkeydown = KeyDown;

    function KeyDown()

    {
        if(control.isValuePressDown()){

            especialEventInLine(control.word());
        }

    }

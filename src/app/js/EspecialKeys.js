
EspecialKeys = function(key) {

    var backspace= 8;
    var tab      = 9;
    var line = Line();


    switch(key)
    {
        case backspace:
              line.backspace();break;

        case tab:
            line.tab();break;

        default:
            return false;
    }



};










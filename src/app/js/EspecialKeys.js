
EspecialKeys = function(key) {

    var backspace= 8;
    var tab      = 9;


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










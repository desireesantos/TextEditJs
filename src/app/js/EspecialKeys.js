    EspecialKeys = function(key) {

        var backspace = 8;
        var tab       = 9;
        var enter     = 13;
        var line = new Line();


        switch(key)
         {
            case backspace:
                    line.backspacePosition();break;

            case tab:
                    line.tabPosition();break;

            case enter:
                    line.nextLine();break;
         }
};










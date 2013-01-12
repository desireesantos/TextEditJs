var LinePositionControl = function (word){


    var marginLeft= 180;
    var marginRight= 800;
    var textPosition = 5;
    var textDirection ="right";



    this.currentPositionInLine = function(){



            var textWidth = context.measureText(word).width;


            if (textDirection == "right") {
                textPosition += 10;

                if (textPosition > marginRight - textWidth) {
                    textDirection = "left";
                }

            }
            else {
                textXpos = 0;

                if (textPosition < 10) {
                    textDirection = "right";
                }

            }

        printWord();
        return textPosition;

        };



    var printWord = function(){

        context.fillText(word, textPosition, marginLeft);
    }


};
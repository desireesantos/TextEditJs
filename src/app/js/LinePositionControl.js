var LinePositionControl = function (word) {


    var coordinateY = 180;
    var marginRight = 980;
    var coordinateXPosition;


    this.currentPositionX = function ()
        {


            var textWidth = context.measureText(word).width;

                coordinateXPosition < (coordinateXPosition - textWidth) ? coordinateXPosition + 10 : coordinateXPosition = 0;
                printWord();

            return coordinateXPosition;

        };




    var printWord = function()
        {

            context.fillText(word , coordinateXPosition, coordinateY);
        }


};
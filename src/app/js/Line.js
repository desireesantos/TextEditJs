var Line = function(word)
{
    var line =[];
    var coordinateXPosition
    var linePositionControl = new LinePositionControl(word);


    this.insertWord = function()
        {
            line.push(word);
            linePositionControl.currentPositionX();
           return line;
        }


     this.removeWord = function()
        {

            line.pop();
           return line;
        }


    this.backspacePosition = function ()
        {
            linePositionControl.backspacePosition();
        }


    this.nextLine = function ()
        {
            linePositionControl.nextLine();
        }


    this.tabPosition = function ()
        {
            linePositionControl.tabPosition();
        }
};




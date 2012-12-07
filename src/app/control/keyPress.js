
document.onkeypress = KeyCheck;
var context = document.getElementById("canvas").getContext("2d");

var leftMargin = 250;
var rightMargin = 960;
var key_enter = 13;
var key_backspace = 100; // TODO:Achar ID da tecla Backspace
var key_tab = 102;  // TODO:Achar ID da tecla TAB

var coordinateX= 230;
var coordinateY= 180;


 cursor = new CursorAnimation();

function KeyCheck()

{
   var KeyID = event.keyCode;
   var charCode = String.fromCharCode(KeyID);
   context.fillText( charCode, coordinateX += 10, coordinateY);

    cursor.changePosition(coordinateX,coordinateY);


    checkMargin();
    checkKey(KeyID);

   
}



function checkMargin(){

    if( coordinateX == 960 )
    {

        callNewLine();
    }
}


function checkKey( keyID )
{

    if(keyID == key_enter)
    {

        callNewLine();
    }

    if(keyID == key_backspace)
    {

        removeOneLeftPosition();
    }


    if(keyID == key_tab)
    {

        actionTAB();
    }


 }


function callNewLine()
{
    coordinateX = 220;
    coordinateY += 20;
}



function checkRightMargim()
{

    if ( coordinateX >= rightMargin )
    {
        line.callNewLine(coordinateX,coordinateY);
    }

}

function checkLeftMargin()
{

    if ( coordinateX < leftMargin )
    {
        coordinateX = rightMargin;
        coordinateY -= 20;
        removeOneLeftPosition();
    }


}
 

function removeOneLeftPosition() {

    coordinateX -= 10;
    checkLeftMargin();
    context.clearRect(coordinateX -= 10,coordinateY,10,10);
    context.fillRect(coordinateX,coordinateY,10,10)
    context.fillStyle = "red";

}


function actionTAB(){

    coordinateX +=40;
    checkRightMargim();

}
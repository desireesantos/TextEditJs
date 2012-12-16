

var board = new Board();
var context = document.getElementById("canvas").getContext("2d");

context.fillRect(board.coordinateX(), board.coordinateY, board.width, board.height());
context.font = "bold 16px Arial";
context.fillStyle = "green";



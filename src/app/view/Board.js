
Board = function() {

    var board = {};

    var coordinateX = 220;
    var coordinateY = 130;
    var width = 1000;
    var height = 900;


    board.coordinateX = function () {
        return coordinateX;
    };

    board.coordinateY = function () {
        return coordinateY;
    };

    board.width = function () {
        return width;
    };

    board.height = function () {
        return height;

    };

    return board;

};
/**
 * Created with JetBrains WebStorm.
 * User: desireesantos
 * Date: 12/16/12
 * Time: 11:04 PM
 * To change this template use File | Settings | File Templates.
 */

WordDimension = function(ArrayWord)

{
    var arrayWords = Array(ArrayWord);
    var context = document.getElementById("canvas").getContext("2d");

    arrayWords.dimensionLastWord = function(){

        var word = arrayWords.lastIndexOf();
        return context.measureText(word);
    };


    return arrayWords;

};

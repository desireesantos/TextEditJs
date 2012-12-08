/**
 * Created with JetBrains WebStorm.
 * User: desireesantos
 * Date: 12/8/12
 * Time: 1:16 AM
 * To change this template use File | Settings | File Templates.
 */


var controlWord = function (word) {

    var control = {};

    control.word = function () {
        return word;
    };


    return control;
};


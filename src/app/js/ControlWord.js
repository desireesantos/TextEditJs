
ControlWord = function(keyID) {

    var control = {};


    control.Word = function () {

        return String.fromCharCode(keyID);
    };


    control.sizeWord = function (){

    }

    return control;

};



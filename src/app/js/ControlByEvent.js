
ControlByEvent = function(key) {

    this.keyId = key;
};


    ControlByEvent.prototype.isPermitedKeyPress = function (){

        if( this.keyID != '8' || this.keyID != '9'){
            return true;
        }

        return false;
    }



    ControlByEvent.prototype.isValuePressDown = function (keyId){

        if( this.keyID == '8' || this.keyID == '9'){
            return true;
        }

        return false;
    }






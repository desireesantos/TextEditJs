describe("Testing event keypress with key_enter 13", function(){


    var e = jQuery.Event("keydown", { keyCode: 13 });


    $('canvas').keydown(function(e)
    {
        if (e.keyCode == 13)
        {
            alert('Enter was pressed.');
        }
    });

}


/**
 * Created with JetBrains WebStorm.
 * User: desireesantos
 * Date: 12/16/12
 * Time: 11:11 PM
 * To change this template use File | Settings | File Templates.
 */


describe("WordDimension", function(){


    var dimension = WordDimension(["a", "b"]);

    it("Dimension", function() {

        dimension.log("A letra :" + dimension.lastIndex);
        expect(dimension.dimensionLastWord().toEqual());
    });


});

/**
 * Created with JetBrains WebStorm.
 * User: desireesantos
 * Date: 4/12/12
 * Time: 2:57 AM
 * To change this template use File | Settings | File Templates.
 */

var layoutBoard = new layoutBlackBoard;
var coordinateX = 0;
var coordinateY = 0;
var paragraph = 40;


function callNewLine(coordinateX,coordinateY)
{
	 coordinateX = coordinateX;
	 coordinateY += paragraph;
 }


function decreasePosition()
{

        coordinateX--;

}

function removeWord (coordinateX,coordinateY){

    var wordBefore;

    // voltar 1 casa: Como saber a letra qual o tamanho da letra anterior ? Tem alguma funcao da API
    // remover letra: clear no contexto da posicao (letraAnterior(),Y)
    // atualizar posicao X
    // manter a cor da tela
}
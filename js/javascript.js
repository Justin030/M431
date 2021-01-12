var punktzahl = 50;
var punkte_antworten = [ ["first", 0], ["second", 0], ["third", 0]];

function reply_click(btn_id){
    console.log(btn_id)

    $("#1.3").siblings().css( "background-color", "grey" );
    $("#"+btn_id).siblings().css("background-color", "blue");
    document.getElementById(btn_id).style.backgroundColor = "white";

    //ID von den Parant Elementen
    idOptionContainer = document.getElementById(btn_id).parentNode.id; 
    idSectionContainer = document.getElementById(idOptionContainer).parentNode.id;

    //Jeder Sektion wird nur eine Punktzahl gegeben!
    for (var arrayIndex in punkte_antworten){
        if(punkte_antworten[arrayIndex][0] == idSectionContainer){
            punkte_antworten[arrayIndex][1] = punktzahl;
            break;
        }
    }
}
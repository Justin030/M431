var labelID, labelClass;
var countedSectionId = false;
var punktzahl = 0;
var punkte_antworten = [["section-container1", 0],
                        ["section-container2", 0],
                        ["section-container3", 0], 
                        ["section-container4", 0], 
                        ["section-container5", 0], 
                        ["section-container6", 0]];

var typeMc = "Du wirkst auf andere auf den ersten Blick ruhig und verträumt, doch die wenigen Leute denen du dich öffnest, wissen wie du wirklich bist. Du bist nicht schüchtern, du passt nur auf wie viel du von dir preisgibst. ";
var typeVi = "Du scheinst sehr schüchtern zu sein und dir fehlt es etwas an Selbstbewusst sein. Du bevorzugst es alleine zu sein aber an dem ist nichts verkehrt. Alleine sein bedeutet nicht automatisch, dass man einsam ist. ";
var typeAe = "Scheint so, als ob du in einem gesunden Mittelfeld bist. Du hast Freunde, kommst gute bei den Leuten an und unternimmst auch gerne mal was. Du hast aber auch kein Problem damit mal eine Weile für dich zu sein. ";
var typeAa = "Mit dir hat man immer viel Spass und du magst Adrenalin. An Selbstbewusstsein fehlt es dir sicherlich auch nicht und am liebsten magst du es, wenn du was ausgefallenes unternehmen kannst. ";

function showresults(){
    var totalscore = 0;
    var your_result;
    
    for(var i = 0; i++; i <=6){
        totalscore += punkte_antworten[i][1];
    }
    
    if(totalscore <= 80)
        your_result = typeMc;
    if(totalscore >= 80 && totalscore <= 130)
        your_result = typeVi;
    if(totalscore >= 130 && totalscore <= 180)
        your_result = typeAe;
    if(totalscore >= 180 && totalscore <= 240)
        your_result = typeAa;
    else{
        console.log("Die punktzahl war") + totalscore;
        console.log(punkte_antworten)
        your_result = "Du hattest kein genaues Resultat, aber das passt am meisten zu dir. \n" + typeVi;
    }
    
    document.getElementById("questions_container").style.display = "none";
    document.getElementById("result_placeholder").innerHTML = your_result;
    document.getElementById("result").style.display = "block";
    console.log(punkte_antworten)
}

function checkallanswers(){
    var allAnswered = false;
    for (var i=0; i<6; i++){
        if(punkte_antworten[i][1] != 0){
            allAnswered = true;
        }else{
            allAnswered = false;
        }
    }

    if(allAnswered){
        showresults();
    }
}

$('label').click(function() {
    labelID = $(this).attr('id');
    labelClass = document.getElementById(labelID).className;
    countedSectionId = false; 

    idLiContainer = document.getElementById(labelID).parentNode.id; 
    idFormContainer = document.getElementById(idLiContainer).parentNode.id;
    idSectionContainer = document.getElementById(idFormContainer).parentNode.id;

    switch (labelClass){
        case 'mc':
            punktzahl = 20;
            break;
        case 'vi':
            punktzahl = 10;
            break;
        case 'ae':
            punktzahl = 30;
            break;
        case 'aa':
            punktzahl = 40;
            break;
        default:
            console.log("keine der antworten wurde ausgewählt.");
            break
    }

    //So that each section is assigned only one score!
    for (var arrayIndex in punkte_antworten){
        if(punkte_antworten[arrayIndex][0] == idSectionContainer){
            punkte_antworten[arrayIndex][1] = punktzahl;
            countedSectionId = true; 
            if(arrayIndex == 5){
                checkallanswers();
            }
            break;
        }
    }
});

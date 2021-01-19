var labelID, labelClass;
var countedSectionId = false;
var punktzahl = 0;
var punkte_antworten = [["section-container1", 0],
                        ["section-container2", 0],
                        ["section-container3", 0], 
                        ["section-container4", 0], 
                        ["section-container5", 0], 
                        ["section-container6", 0]];

$('label').click(function() {
    labelID = $(this).attr('id');
    labelClass = document.getElementById(labelID).className;

    countedSectionId = false; 
    console.log(labelID)
    console.log(labelClass);

    idLiContainer = document.getElementById(labelID).parentNode.id; 
    idFormContainer = document.getElementById(idLiContainer).parentNode.id;
    idSectionContainer = document.getElementById(idFormContainer).parentNode.id;

    switch (labelClass){
        case 'mc':
            punktzahl = 30;
            break;
        case 'vi':
            punktzahl = 20;
            break;
        case 'ae':
            punktzahl = 10;
            break;
        case 'aa':
            punktzahl = 40;
            break;
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

function showresults(){
    var totalscore = 0;
    for(var arrayIndex in punkte_antworten){
        totalscore += punkte_antworten[arrayIndex][1];
    }
    document.getElementById("section-container6").style.display = "none";
    document.getElementById("result_placeholder").innerHTML = "Your testscore is " + totalscore +"\n Congratulations!"
    document.getElementById("result").style.display = "block";
}
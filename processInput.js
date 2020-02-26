var leagueLink = 'https://na.op.gg/summoner/userName='
function submitUser(){
    var inputStuff = document.getElementById('textSubmission').value;
    inputStuff = inputStuff.replace(/(\r\n|\n|\r)/gm, "");
    var splitArray = inputStuff.split("joined the lobby");
    var links = [];
    for(var i =0; i<splitArray.length-1; i++){
        splitArray[i] = splitArray[i].replace(/ /g,'');
        links[i] = leagueLink +splitArray[i];
        window.open(links[i]);
    }

}
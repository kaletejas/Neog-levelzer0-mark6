var btnTrans = document.querySelector("#btn");
var inputText = document.querySelector("#textIn");
var outputText = document.querySelector("#textOut");
var serverURL = "https://api.funtranslations.com/translate/minion.json"



function getNewURL(input){
    return serverURL + "?" + "text=" + input;
}
function clickHandler(){

    var input = inputText.value;
    fetch(getNewURL(input))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputText.innerText = translatedText;   
    })
    .catch(errorHandler)
}

function errorHandler(error){
    alert(error + "error occured try after sometime." )
}

btnTrans.addEventListener("click", clickHandler)


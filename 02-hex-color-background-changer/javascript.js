let wordsArray = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function randomItem(theArray){
    let randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
function changeColor(){
    let hex = "#" + 
    randomItem(wordsArray) + 
    randomItem(wordsArray) + 
    randomItem(wordsArray) + 
    randomItem(wordsArray) + 
    randomItem(wordsArray) + 
    randomItem(wordsArray);

    document.body.style.backgroundColor = hex;
    document.querySelector(".js-show-hax").innerHTML = hex;
}
document.querySelector(".js-change-color").addEventListener("click", changeColor);;
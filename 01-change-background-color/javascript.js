let colors = ['red', 'blue', 'green', 'black', 'pink', 'yellow']
function changeColor(){
    let randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}
document.querySelector(".js-change-color").addEventListener("click", changeColor);;
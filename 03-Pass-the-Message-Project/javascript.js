const form = document.querySelector('#message-form')

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    let message = document.querySelector(".js-input");
    let output = document.querySelector(".js-output");
    let error = document.querySelector(".js-error");

    if(message.value === ''){
        error.style.display = 'block';
        error.innerHTML = "Please enter a value in the input"
        setTimeout(function(){
            error.style.display = 'none';
        }, 3000)
    }else{
        output.innerHTML = message.value;
    }

});
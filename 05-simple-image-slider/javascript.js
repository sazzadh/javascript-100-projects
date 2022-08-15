const lowerCount = document.querySelector('.js-lower-count');
const addCount = document.querySelector('.js-add-count');
const theCouner = document.querySelector('.js-the-counter');

lowerCount.addEventListener("click", function(event){
    event.preventDefault()
    
    let newCount =  parseInt(theCouner.innerHTML) - 1;

    if(newCount < 0){
        theCouner.style.color = 'red';
    }else if(newCount > 0){
        theCouner.style.color = 'green';
    }else{
        theCouner.style.color = 'black';
    }

    theCouner.innerHTML = newCount;

});

addCount.addEventListener("click", function(event){
    event.preventDefault()
    
    let newCount =  parseInt(theCouner.innerHTML) + 1;

    if(newCount < 0){
        theCouner.style.color = 'red';
    }else if(newCount > 0){
        theCouner.style.color = 'green';
    }else{
        theCouner.style.color = 'black';
    }

    theCouner.innerHTML = newCount;

});
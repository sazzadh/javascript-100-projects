function changeClassAnimation(className, animationStartTime, animationStopTime, TotalTime, intervalTime = 1000){
    let theTarget = document.querySelector(className);
    let i = 0;

    //Converting the secends to millisecond
    animationStartTime = animationStartTime * intervalTime;
    animationStopTime = animationStopTime * intervalTime;
    TotalTime = TotalTime * intervalTime;


    setInterval(function() {
        i++;
        
        let currentTime = i * intervalTime;

        if ( (currentTime === animationStartTime ) && !theTarget.classList.contains('box_active') ) {
            theTarget.classList.add('box_active');
        }

        if ( (currentTime === animationStopTime ) && theTarget.classList.contains('box_active') ) {
            theTarget.classList.remove('box_active');
        }

        if(currentTime === TotalTime ){
            i = 0;
        }

        console.log(currentTime);

        
    }, intervalTime);
}

changeClassAnimation('.box_1', 1, 4, 13, 300);
changeClassAnimation('.box_2', 4, 7, 13, 300);
changeClassAnimation('.box_3', 7, 10, 13, 300);
changeClassAnimation('.box_4', 10, 13, 13, 300);
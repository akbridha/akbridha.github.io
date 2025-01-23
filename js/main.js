'use strict';


document.addEventListener("DOMContentLoaded", function(){


    console.log('content loaded');
    
    
    // Add a delay of 2 seconds (2000 milliseconds)
    setTimeout(function() {
        console.log("This message is displayed after a 2-second delay.");
        document.querySelector('.profile-picture').classList.add('visible');
        // Your delayed code here
    },500);

})
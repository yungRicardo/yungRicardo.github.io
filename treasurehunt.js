var clickCounter = 0;
const clickDisplay = () => {
    clickCounter ++; //increment the counter for each click
    document.getElementById("clicks").innerHTML = clickCounter
}


var treasureNumber = Math.floor(Math.random() * 16)
var bombNumber = Math.floor(Math.random() * 16)  
var bombNumber2 = Math.floor(Math.random() * 16)

//if(treasureNumber = bombNumber || bombNumber2){
    
//}
const treasure = (location) => {
    clickCounter ++; 
    document.getElementById("clicks").innerHTML = clickCounter
    if( clickCounter > 15){
        alert("All out of clicks.")
        window.location.reload()
    }

    if (treasureNumber === location ){ 
        document.getElementById(location).innerHTML = "&#x1f308"
        alert("YOU WIN")
        window.location.reload()
        
    } else if (bombNumber === location){
         document.getElementById(location).innerHTML = "&#x2620"
         alert("Better luck next time.")
         window.location.reload()
        
    }else if (bombNumber2 === location){
        document.getElementById(location).innerHTML = "&#x2620"
         alert("Oops, try again.")
         window.location.reload()

    }else
        document.getElementById(location).innerHTML = "&#x1f332"
    }
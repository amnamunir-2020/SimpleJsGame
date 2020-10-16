//key press function start

//const { count } = require("console")

// window.onkeypress=function(){
//     console.log("Start here!@")
// }

//keyboard event

// window.onkeypress=function(e){
//     console.log("testing",e)
// }



// window.onkeydown=function(e){
//     //console.log("testing",e.KeyCode)
//     if(e.KeyCode===32){
//         console.log("SpaceKey")
//     }
// }


//if key code soo
var image=document.getElementById('image')
var count=0
window.onkeydown=function(e){
    if(e.KeyCode===32){    //spacekey=32
        image.src="https://www.fightersgeneration.com/characters/char-upper.gif"
        setTimeout(()=>{
            image.src="https://www.fightersgeneration.com/characters/char-upper.gif"
        },2000)
    }
    //d key=68
    if(e.KeyCode===68){
        //console.log("d")
        count=count+10
        console.log(count)
        image.src= "https://www.fightersgeneration.com/characters/charlotte-mult.gif"
        image.style.marginLeft=count + "px"
       
    }
}

 //console.log(window)

 
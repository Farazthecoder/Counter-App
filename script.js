// logic for counter app


let updateValue = document.getElementById("updating");
let btn = Array.from(document.getElementsByTagName("button"));
let main = document.getElementsByTagName("main")[0];


let number = 0;

function randomColor(){
    colorFirst = Math.floor(Math.random() * 255);
    colorSecond = Math.floor(Math.random() * 255);
    colorThird = Math.floor(Math.random() * 255);

     return `rgb(${colorFirst},${colorSecond},${colorThird})`;
    
}

btn.forEach((btn)=>{
   btn.addEventListener("click",function(){
    if(btn.id == "minus"){
       updateValue.textContent = --number;
       updateValue.style.color = randomColor();
       updateValue.style.fontSize = "60px";
       main.style.boxShadow = `inset 0px 88px 121px -60px ${randomColor()}`
       main.style.transition = "all 1s";
       updateValue.style.transition = "all 1s";
    }

    else if(btn.id == "add"){
        updateValue.textContent = ++number;
        updateValue.style.color = randomColor();
        updateValue.style.fontSize = "60px";
        main.style.boxShadow = `inset 0px 88px 121px -60px ${randomColor()}`
        main.style.transition = "all 1s";
        updateValue.style.transition = "all 1s";
    }

    else if(btn.id == "reset"){
        number = 0
        updateValue.textContent = number;
        updateValue.style.color = "black";
        updateValue.style.fontSize = "40px";
        main.style.boxShadow = "none";
    }
   })
})






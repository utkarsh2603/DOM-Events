let btn=document.querySelector("button");

btn.addEventListener("click", function(){
    let a=document.querySelector("h2");
    let b=document.querySelector("div div");
    a.innerText=getRandomColor();
    b.style.backgroundColor=getRandomColor();
})

function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    return color;
}


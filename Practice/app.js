let btns=document.querySelectorAll("button");
// console.dir(btn);

function abc(){
    console.log("Button was clicked");
}

function def(){
    console.log("Button");
}

for(let btn of btns){
    btn.addEventListener("click", abc);
    btn.addEventListener("click", def);
}
let inp=document.querySelector("#text");
let p=document.querySelector("p");

inp.addEventListener("change",function(){
    p.innerText=inp.value;
});
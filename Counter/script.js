let sub= document.getElementById("tx");

function substract(){
   sub.innerText=parseInt(sub.innerText)-1;
}

document.getElementById("add")
function addtition(){
    sub.innerText=parseInt(sub.innerText)+1;
 }

 function onAddClick(event){
    addtition();
 }

 add.addEventListener("click",onAddClick)
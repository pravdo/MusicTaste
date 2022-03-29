let data=1;
document.getElementById("root").innerText=data;
function decrement(){
    if(data>1){
data=data-1;
document.getElementById("root").innerText=data;
    } else return;
}

function increment(){
data=data+1;
document.getElementById("root").innerText=data;
}
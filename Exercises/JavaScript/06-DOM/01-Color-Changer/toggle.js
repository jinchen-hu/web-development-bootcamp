alert("Connected");
var but = document.querySelector("button");
var isBlue = false;
// but.addEventListener("click", function(){
//     if(isBlue){
//         document.body.style.background="white";
//     }else{
//         document.body.style.background="purple";
//     }
//     isBlue = !isBlue;
// })

but.addEventListener("click", function(){
    document.body.classList.toggle("purple");
});
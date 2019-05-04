let openMenu=document.querySelector(".openMenu");
openMenu.addEventListener("click",function(){    
    document.querySelector(".sidebar").classList.add("active")
});
let closeMenu=document.querySelector(".close");
 closeMenu.addEventListener("click",function(){
    document.querySelector(".sidebar").classList.remove("active")

 });
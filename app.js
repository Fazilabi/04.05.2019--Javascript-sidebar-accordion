// var p = document.querySelector(".lorem");



// // p.innerHTML = "<b>salam</b>";

// // p.style.fontSize="50px";
// // p.style.backgroundColor="green";

// p.classList.add("text-center");

// var social_li=document.querySelectorAll("li");
// console.log(social_li);

// for (let index = 0; index < social_li.length; index++) {
//     social_li[index].addEventListener("click",function(){
//         console.log(this.classList.toggle("active_li"))
//     });
// }


let acclist=document.querySelectorAll(".accordion .caption")
for (let index = 0; index < acclist.length; index++) {
    acclist[index].addEventListener("click",function () {
        this.nextElementSibling.classList.toggle("open");
        
        if(this.children[0].classList.contains("fa-angle-down"))
        {
            this.children[0].classList.replace("fa-angle-down","fa-angle-up")
        }
        else{
            this.children[0].classList.replace("fa-angle-up","fa-angle-down")
        }
    })
}
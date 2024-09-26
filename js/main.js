


let pack = document.getElementsByClassName("pack");
let icon = document.getElementById("icon");

icon.addEventListener("click" , ()=> {
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars" , "fa-xmark")
        pack[0].style.cssText=`
        transform: translateY(0%);
        transition: .8s;
        `
        
        icon.style.color="white"
        icon.style.transition = ".6s"
    }else {
        icon.classList.replace("fa-xmark" , "fa-bars")
        pack[0].style.cssText=`
        transition: .8s;`
        icon.style.color="";
        icon.style.transition = ".6s"
    }


})


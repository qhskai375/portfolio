for(let i=1;  i<=3; i++){
    document.querySelector(`.close-modal${i}`).addEventListener("click", function(){
        document.querySelector(`.modal${i}`).style.display = "none";
    })
    document.querySelector(`.open-modal${i}`).addEventListener("click", function(){
        document.querySelector(`.modal${i}`).style.display = "block";
    })
}

let header = document.querySelector(".header");
window.addEventListener("scroll", function(){
    if(this.scrollY > 100){
        header.classList.add("active")
    }
    else{
        header.classList.remove("active")
    }
})
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
    if(menu.classList.contains("toggle")){
        menu.classList.remove("toggle");
    }else{
        menu.classList.add("toggle");
    }
});

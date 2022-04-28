
document.querySelectorAll('a[href^="#"]').forEach(anchor => { // Entender 'a[href^='#']'
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "end"
        })
    })
})
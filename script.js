const splash = document.querySelector(".splash");

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(()=>{
        splash.classList.remove('splash')
    }, 2000)
})
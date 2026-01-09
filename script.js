const body = document.body ;
const btn = document.querySelector("#btn-theme");

const savetheme = localStorage.getItem('theme');
themeweb(savetheme === 'dark')

function themeweb (tipe){
        if (tipe){
            
            btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            
            btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
}
btn.addEventListener("click",() =>{
    const addDark = body.classList.toggle("dark");
    themeweb(addDark);
     localStorage.setItem('theme', addDark ? 'dark' : 'light');
});


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

const navLinks = document.querySelectorAll('nav ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
let navbar = document.getElementById('topbar');
let header = document.getElementById('header');
let sticky = header.offsetTop;

window.onscroll = function() {stickyBar()};




function stickyBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 


function eventListeners() {
  const mobileMenu = document.querySelector('.mobile-menu');

  mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
  const navbar = document.querySelector('.nav-bar')
  if(navbar.classList.contains('mostrar')) {
      navbar.classList.remove('mostrar')
  }else {
      navbar.classList.add('mostrar')
  }
}

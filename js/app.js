document.getElementById("button1").onclick = function (){
  window.location.href = "about-me.html"
}
document.getElementById("button2").onclick = function (){
  window.location.href = "projects.html"
}

function toggleMenu() {
  const menuIcon = document.querySelector('.menu-icon');
  const menu = document.getElementById('menu');
  menuIcon.classList.toggle('active');
  menu.classList.toggle('active');
}

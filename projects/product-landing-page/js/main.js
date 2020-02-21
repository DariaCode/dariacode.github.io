window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav-bar").style.padding = "10px 15px";
    document.getElementById("logo").style.fontSize = "25px";
    document.getElementById("header-img").style.height = "35px";
  } else {
    document.getElementById("nav-bar").style.padding = "15px 15px";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("header-img").style.height = "45px";
  }
}
function menuBar(){
  const bar = document.getElementById("nav-link");
  const menu = document.querySelector("menu-bar");
  if (bar.className === "nav-links") {
    bar.className += menu;  
  } else{
    bar.className = "nav-links";  

  }
}


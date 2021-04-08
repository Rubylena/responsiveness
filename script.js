function menuBar(){
  const bar = document.getElementById("nav-link");
  if (bar.className === "nav-links") {
      bar.className += "menu-bar";
      
  } else{
      bar.className = "nav-links";
      
  }
}


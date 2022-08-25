function on() {
    document.getElementById("overlay").style.display = "block";
}
    
  function off(){
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlay-1").style.display = "none";
    document.getElementById("overlay-2").style.display = "none";
  }

  function friends(){
    document.getElementById("overlay-1").style.display = "block";
  }
  function yourself(){
    document.getElementById("overlay-2").style.display = "block";
  }

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
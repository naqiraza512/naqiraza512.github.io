// Add a script tag to the bottom of your HTML file

// This script will change the text color of the header on click

var header = document.querySelector("header");

header.addEventListener("click", function() {
    if(header.style.color=="black")
  header.style.color = "red";
  else
  header.style.color = "black";
});

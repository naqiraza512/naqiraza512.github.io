// Add a script tag to the bottom of your HTML file

// This script will change the text color of the header on click

var header = document.querySelector("header");

header.addEventListener("click", function() {
    if(header.style.color=="black")
  header.style.color = "red";
  else if(header.style.color=="red")
  header.style.color = "green";
  else if(header.style.color=="green")
  header.style.color = "yellow";
  else if(header.style.color=="yellow")
  header.style.color = "darkblue";
  else
  header.style.color = "black";
});

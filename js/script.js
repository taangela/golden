
function myFunction() {
  var x = document.getElementById("myMenu");
  if (x.className === "menu-items") {
    x.className += " responsive";
    console.log ("co sie dzieje")
  } else {
    x.className = "menu-items";
    console.log("nie wiem")
  }
}

if (localStorage.noOfDots == null) {
  localStorage.noOfDots = 0;
}

document.

function addDot() {
  console.log("Clicked");
  localStorage.noOfDots = parseInt(localStorage.noOfDots) + 1;

  var dotsHolder = document.getElementById("dots-holder");

  dotsHolder.innerHTML =
    dotsHolder.innerHTML + '<div class="circle dot"></div>';
}

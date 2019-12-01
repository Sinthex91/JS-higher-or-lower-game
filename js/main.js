//Challenge: higher or lower game
rdmNum = Math.random() * 10;
rdmNum = Math.ceil(rdmNum);
function underFive() {
  if (rdmNum <= 5)
    document.getElementById("result").innerHTML =
      "<h2>Yeah, thats true! <br> It is: " + rdmNum + "</h2>";
  else
    document.getElementById("result").innerHTML =
      "<h2>Sadly not this time.. <br> It is: " + rdmNum + "</h2>";
}
function aboveFive() {
  if (rdmNum > 5)
    document.getElementById("result").innerHTML =
      "<h2>Yeah, thats true! <br> It is: " + rdmNum + "</h2>";
  else
    document.getElementById("result").innerHTML =
      "<h2>Sadly not this time.. <br> It is: " + rdmNum + "</h2>";
}
function again() {
  window.location.reload();
  // return false;
}

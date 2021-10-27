var date = document.querySelector(".input1");
var lucky = document.querySelector(".input2");
var btn = document.querySelector(".btn");
btn.addEventListener("click", clickHandler);
var x = 0;
var result = "";

function clickHandler() {
  var date_Int = date.value;
  date_Int = String(date_Int);
  for (var i = 0; i < date_Int.length; i++) {
    if (date_Int[i] != "-") {
      x += Number(date_Int[i]);
    }
  }
  checkLucky();
}

function checkLucky() {
  if (lucky.value == "" || isNaN(lucky.value)) {
    result = "Can't be empty! 🛒";
  } else if (lucky.value > 0) {
    if (x % lucky.value == 0) {
      result = " Your Birthday is lucky! 🥘";
    } else {
      result = "Your Birthday is Not That Lucky! 🥦";
    }
  } else {
    result = "Please enter positive value! 😥";
  }
  document.querySelector("#input3").innerText = result;
}

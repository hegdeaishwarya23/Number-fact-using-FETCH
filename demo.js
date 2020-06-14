let factnumber = document.getElementById("factnumber");
let fact = document.getElementById("fact");
let facttext = document.getElementById("facttext");

factnumber.addEventListener("input", getFactFetch);

function getFactFetch() {
  number = factnumber.value;
  if (number != "") {
    fetch("http://numberapi.com/" + number)
      .then((response) => response.text())
      .then((data) => {
        fact.style.display = "block";
        facttext.innerHTML = data;
      })
      .catch((err) => console.log(err));
  }
  if (number == "") {
    fact.style.display = "none";
  }
}

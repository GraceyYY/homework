const MONEY = "￥20";

function extractNumbersFromString(string) {
  return string.substr(1);
}
document.getElementById("output").innerHTML += `\n ${extractNumbersFromString(MONEY)}`;
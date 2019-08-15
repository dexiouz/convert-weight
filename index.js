// document.querySelector('#gramsOutPut').style.visibility = 'hidden'
// document.querySelector('#kgOutPut').style.visibility = 'hidden'
// document.querySelector('#ounceOutPut').style.visibility = 'hidden'
document.querySelector("#input").addEventListener("input", convert)

function convert (e) {
  document.querySelector("#gramsOutPut").style.visibility = "visible";
  document.querySelector("#kgOutPut").style.visibility = "visible";
  document.querySelector("#ounceOutPut").style.visibility = "visible";
  const pounds = document.querySelector("#input").value;
  if (pounds == 0) {
    document.querySelector("#gramsOutPut").style.visibility = "hidden";
    document.querySelector("#kgOutPut").style.visibility = "hidden";
    document.querySelector("#ounceOutPut").style.visibility = "hidden";
  }
  const grams = (document.querySelector("#gramsOutPut span").innerHTML =
    pounds / 0.0022046);
  const kilogrammes = (document.querySelector("#kgOutPut span").innerHTML =
    pounds / 2.2046);
  const ounces = (document.querySelector("#ounceOutPut span").innerHTML =
    pounds * 16);
};

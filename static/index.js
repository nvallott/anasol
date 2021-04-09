// Anasol - Nicolas Vallotton - Décembre 2020

// Creating APP object for storing all Methods
APP = {};

APP.newSample = function(){
  let ele = document.getElementById("new_sample");
  let newForm = document.getElementById("form_sample").innerHTML;
  document.getElementById("more_sample").remove();
  ele.innerHTML += newForm;
}

APP.getParcelle = function(){
  let item = document.getElementsByClassName("esri-feature-content").item(0).innerText
  console.log(item);
}

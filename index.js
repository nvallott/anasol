// Anasol - Nicolas Vallotton - Décembre 2020

let newSample = function(){
  let ele = document.getElementById("new_sample");
  let newForm = document.getElementById("form_sample").innerHTML;
  document.getElementById("more_sample").remove();
  ele.innerHTML += newForm;
}

let getParcelle = function(){
  let item = document.getElementsByClassName("esri-feature-content").item(0).innerText
  console.log(item);
}

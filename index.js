// Anasol - Nicolas Vallotton - Décembre 2020
let nSample = 1;
console.log("hidfsd");
let newSample = function(){
  let ele = document.getElementById("new_sample");
  let newForm = document.getElementById("form_sample").innerHTML;
  document.getElementById("more_sample").remove();
  ele.innerHTML += newForm;
}

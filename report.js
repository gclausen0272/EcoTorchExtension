// let suggestion = document.getElementById("suggestion");
// let reset = document.getElementById("reset")

// var elem = document.querySelector('input[type="range"]');
var elem = document.getElementById("myRange")

var rangeValue = function(){
  var newValue = elem.value;
  var target = document.querySelector('.value');
  target.innerHTML = newValue;
}

elem.addEventListener("input", rangeValue);


function load_data(){
  var mydata = JSON.parse(data);
  console.log("data coming")
  document.getElementById("emissions").innerHTML = mydata[0].emissions
  document.getElementById("duration").innerHTML = mydata[0].duration
}

// reset.addEventListener("click", async () => {
//   console.log("reset button")
//   window.location.reload(true);
// });


window.addEventListener('load', load_data);

// let suggestion = document.getElementById("suggestion");
// let reset = document.getElementById("reset")

// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// var step = document.getElementById("new")
// output.innerHTML = step.value;

// step.oninput = function() {
//   output.innerHTML = this.value;
// }

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

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

output.innerHTML = slider.value; // Display the default slider value

let suggestion = document.getElementById("suggestion");
let reset = document.getElementById("reset")

// data = '[{"emissions": "500", "duration": "30"}]'
function load_data(){
  var mydata = JSON.parse(data);
  console.log("data coming")
  document.getElementById("emissions").innerHTML = mydata.emissions
  document.getElementById("duration").innerHTML = mydata.duration
}


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

// reset.addEventListener("click", async () => {
//   console.log("reset button")
//   window.location.reload(true);
// });


// function myFunction() {
//   alert("Page is loaded");
//   document.getElementById("header").innerHTML = "New information"
//   var mydata = JSON.parse(data);
//   alert(mydata[0].name)
//   document.getElementById("header").innerHTML =mydata[0].name
// }

window.addEventListener('load', load_data);

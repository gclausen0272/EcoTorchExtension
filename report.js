var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

let suggestion = document.getElementById("suggestion");
let reset = document.getElementById("reset")
let emissions = document.getElementById("emissions")
let durations = document.getElementById("durations")

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

reset.addEventListener("click", async () => {
  console.log("reset button")
  window.location.reload(true);
});

// function read_json(json_file){
//   const obj = JSON.parse(json_file);
//   emissions = obj.emissions
//   duration = obj.duration
// }

var json_file = {
  "emissions": 500,
  "duration":30
}

function onload(json_file){
  var obj = JSON.parse(json_file);
  document.getElementById("emissions").innerHTML = obj.emissions
}


// const txt = '{"name":"John", "age":30, "city":"New York"}'
// const obj = JSON.parse(txt);
// document.getElementById("x").innerHTML = obj.name + ", " + obj.age;

// function carbon_emission(){

// }

// suggestion.addEventListener("click", async () => {

// });

// onClick={() => window.location.href='/'}
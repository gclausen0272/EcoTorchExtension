var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

let suggestion = document.getElementById("suggestion");
let reset = document.getElementById("reset")

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}


reset.addEventListener("click", async () => {
  console.log("reset button")
  window.location.reload(true);
});

// suggestion.addEventListener("click", async () => {

// });

// onClick={() => window.location.href='/'}
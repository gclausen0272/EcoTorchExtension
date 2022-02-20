// var elem = document.querySelector('input[type="range"]');
// var elem = document.getElementById("myRange")

// var rangeValue = function(){
//   var newValue = elem.value;
//   var target = document.querySelector('.value');
//   target.innerHTML = newValue;
// }

// elem.addEventListener("input", rangeValue);


function load_data(){
  var mydata = JSON.parse(data);
  console.log(mydata)
  document.getElementById("emissions").innerHTML = mydata[0].emissions
  document.getElementById("duration").innerHTML = mydata[0].duration

  document.getElementById("devA").innerHTML = mydata[0].devA
  document.getElementById("devB").innerHTML = mydata[0].devB
  document.getElementById("devC").innerHTML = mydata[0].devC

  // document.getElementById("devA").innerHTML = ("devA", mydata[0].devA)
  // document.getElementById("devB").innerHTML = ("devB", mydata[0].devB)
  // document.getElementById("devC").innerHTML = ("devC", mydata[0].devC)

  // var devData = mydata[0].devices
  // console.log(devData)
  // document.getElementById("devA").innerHTML = devData[0].devA
  // document.getElementById("devB").innerHTML = devData[0].devB
  // document.getElementById("devC").innerHTML = devData[0].devC
}

window.addEventListener('load', load_data);



function init() {
  const sliders = document.getElementsByClassName("tick-slider-input");

  for (let slider of sliders) {
      slider.oninput = onSliderInput;

      updateValue(slider);
      updateValuePosition(slider);
      updateLabels(slider);
      updateProgress(slider);

      setTicks(slider);
  }
}

function onSliderInput(event) {
  updateValue(event.target);
  updateValuePosition(event.target);
  updateLabels(event.target);
  updateProgress(event.target);
}

function updateValue(slider) {
  let value = document.getElementById(slider.dataset.valueId);

  value.innerHTML = "<div>" + slider.value + "</div>";
}

function updateValuePosition(slider) {
  let value = document.getElementById(slider.dataset.valueId);

  const percent = getSliderPercent(slider);

  const sliderWidth = slider.getBoundingClientRect().width;
  const valueWidth = value.getBoundingClientRect().width;
  const handleSize = slider.dataset.handleSize;

  let left = percent * (sliderWidth - handleSize) + handleSize / 2 - valueWidth / 2;

  left = Math.min(left, sliderWidth - valueWidth);
  left = slider.value === slider.min ? 0 : left;

  value.style.left = left + "px";
}

function updateLabels(slider) {
  const value = document.getElementById(slider.dataset.valueId);
  const minLabel = document.getElementById(slider.dataset.minLabelId);
  const maxLabel = document.getElementById(slider.dataset.maxLabelId);

  const valueRect = value.getBoundingClientRect();
  const minLabelRect = minLabel.getBoundingClientRect();
  const maxLabelRect = maxLabel.getBoundingClientRect();

  const minLabelDelta = valueRect.left - (minLabelRect.left);
  const maxLabelDelta = maxLabelRect.left - valueRect.left;

  const deltaThreshold = 32;

  if (minLabelDelta < deltaThreshold) minLabel.classList.add("hidden");
  else minLabel.classList.remove("hidden");

  if (maxLabelDelta < deltaThreshold) maxLabel.classList.add("hidden");
  else maxLabel.classList.remove("hidden");
}

function updateProgress(slider) {
  let progress = document.getElementById(slider.dataset.progressId);
  const percent = getSliderPercent(slider);

  progress.style.width = percent * 100 + "%";
}

function getSliderPercent(slider) {
  const range = slider.max - slider.min;
  const absValue = slider.value - slider.min;

  return absValue / range;
}

function setTicks(slider) {
  let container = document.getElementById(slider.dataset.tickId);
  const spacing = parseFloat(slider.dataset.tickStep);
  const sliderRange = slider.max - slider.min;
  const tickCount = sliderRange / spacing + 1; // +1 to account for 0

  for (let ii = 0; ii < tickCount; ii++) {
      let tick = document.createElement("span");

      tick.className = "tick-slider-tick";

      container.appendChild(tick);
  }
}

function onResize() {
  const sliders = document.getElementsByClassName("tick-slider-input");

  for (let slider of sliders) {
      updateValuePosition(slider);
  }
}

window.onload = init;
window.addEventListener("resize", onResize);

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
  console.log(mydata)
  document.getElementById("emissions").innerHTML = mydata[0].emissions
  document.getElementById("duration").innerHTML = mydata[0].duration

  document.getElementById("devA").innerHTML = mydata[0].devA
  document.getElementById("devB").innerHTML = mydata[0].devB
  document.getElementById("devC").innerHTML = mydata[0].devC

  // var devData = mydata[0].devices
  // console.log(devData)
  // document.getElementById("devA").innerHTML = devData[0].devA
  // document.getElementById("devB").innerHTML = devData[0].devB
  // document.getElementById("devC").innerHTML = devData[0].devC
}

window.addEventListener('load', load_data);

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
  document.getElementById("emissions").innerHTML = mydata[0]["emissions"]
  document.getElementById("duration").innerHTML = mydata[0]["duration"]
  document.getElementById("energy").innerHTML = mydata[0]["energyConsumed"]

  document.getElementById("devA").innerHTML = mydata[0].devA
  document.getElementById("devB").innerHTML = mydata[0].devB
  document.getElementById("devC").innerHTML = mydata[0].devC

  // document.getElementById("emissions").innerHTML = mydata[0]["emissions"]
  // document.getElementById("duration").innerHTML = mydata[0]["TotalTime"]
  // document.getElementById("energy").innerHTML = mydata[0]["energyConsumed"]

  // document.getElementById("devA").innerHTML = mydata[0]["Tesla K80"]
  // document.getElementById("devB").innerHTML = mydata[0]["Tesla V100-PCIE-16GB"]
  // document.getElementById("devC").innerHTML = mydata[0]["T4"]

}

window.addEventListener('load', load_data);

function load_data(){
  var mydata = JSON.parse(data);
  console.log(mydata)
  document.getElementById("emissions").innerHTML = mydata[0]["emissions"]
  document.getElementById("duration").innerHTML = mydata[0]["TotalTime"]
  document.getElementById("energy").innerHTML = mydata[0]["energyConsumed"]

  document.getElementById("devA").innerHTML = mydata[0]["Tesla K80"]
  document.getElementById("devB").innerHTML = mydata[0]["Tesla V100-PCIE-16GB"]
  document.getElementById("devC").innerHTML = mydata[0]["T4"]

}

window.addEventListener('load', load_data);

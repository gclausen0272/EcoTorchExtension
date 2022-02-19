// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");
let read = document.getElementById("back")
let stopTime = document.getElementById("stop")
let sel = document.getElementById("modelType")
let r = ""
let slip = " "


chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

chrome.runtime.onMessage.addListener( async function (response, sendResponse) {

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    r = response
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: replace(response),
    });

});


//commented out code is an example of how injection of a response can work 
function replace(response){
    //    console.log(response);
    // document.getSelection().getRangeAt(0).deleteContents()
    // let newNode = document.createElement('u');
    // newNode.innerHTML = response;
    // document.getSelection().getRangeAt(0).insertNode(newNode); 
}


sel.addEventListener("click", async () => {
  let currentMode = document.getElementById("modelType").value.toString(); 
  if (currentMode =="imageClass"){
      setImageVis();
      setTextInvis();
    }
  else if (currentMode=="textClass"){
    setTextVis();
    setImageInvis();
  }
  else{
    setTextInvis();
    setImageInvis();
  }

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: runcheck,
  });

})
read.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: back,
    args: [document.getElementById("modelType").value.toString(), document.getElementById("classNum").value.toString(), document.getElementById("quantity").value.toString(), document.getElementById("maxLen").value.toString(), document.getElementById("hei").value.toString(), document.getElementById("wid").value.toString() ]
  });
});

stopTime.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: stop,
  });
});

 function back(modelType,classNum, epochs, maxLen, hei, wid) {
        var j  = document.getSelection()  
        var parsedCode = j.toString()
        console.log(parsedCode,modelType, classNum, epochs, maxLen, hei, wid)
        let inputs = [] 
        if(modelType == "imageClass"){
          inputs = [parsedCode, classNum, epochs,modelType, hei,wid ]
        }
        else{
          inputs = [parsedCode, classNum, epochs,modelType, maxLen ]
        }
        // let resp = [0,j.toString(), modelType, epochs, parsedCode]
      chrome.runtime.sendMessage(inputs, function (response) {});

  }
  function stop() {     
        let resp = [1,""]

      chrome.runtime.sendMessage(resp, function (response) {});

  }
function runcheck(){
  // console.log("hello world")
}
function setImageVis(){
  document.getElementById('imageC').style.display = 'block';
}
function setImageInvis(){
  document.getElementById('imageC').style.display = 'none';
}
  
function setTextVis(){
  document.getElementById('textC').style.display = 'block';
}
function setTextInvis(){
  document.getElementById('textC').style.display = 'none';
}
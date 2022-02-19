// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");
let read = document.getElementById("back")
let stopTime = document.getElementById("stop")
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


read.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: back,
    args: [document.getElementById("cars").value.toString(), document.getElementById("quantity").value.toString()]
  });
});

stopTime.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: stop,
  });
});

 function back(modelType, epochs) {
        var j  = document.getSelection()  
        var parsedCode = j.toString().replaceAll(" ","<space>").split("\n")
        let resp = [0,j.toString(), modelType, epochs, parsedCode]
      chrome.runtime.sendMessage(resp, function (response) {});

  }
  function stop() {     
        let resp = [1,""]

      chrome.runtime.sendMessage(resp, function (response) {});

  }
  
// Initialize button with users's prefered color
let changeColor = document.getElementById("changeColor");
let read = document.getElementById("back")
let stopTime = document.getElementById("stop")
let r = ""
let slip = " "
let report = document.getElementById("report_link")


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

function replace(response){
       console.log(response);
    document.getSelection().getRangeAt(0).deleteContents()
    let newNode = document.createElement('u');
    newNode.innerHTML = response;
    document.getSelection().getRangeAt(0).insertNode(newNode); 
}
// When the button is clicked, inject etPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    console.log("hi")
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

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

report.addEventListener("click", async () => {
  console.log("get to report")
  chrome.tabs.create({url: "report.html"});
});

// // This function is sending information to the background service worker with an async request: we will need to do something similar
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//       var j  = document.getSelection()
//     let resp2 = [2,j.toString()]
//     chrome.runtime.sendMessage(resp2, function (response) {});

//       document.getSelection().getRangeAt(0).deleteContents()
//         let newNode = document.createElement('u');
//         newNode.innerHTML = "Spell Check In Progress";
//         document.getSelection().getRangeAt(0).insertNode(newNode);
//         let resp = [0,j.toString()]
//         chrome.runtime.sendMessage(resp, (response) => {console.log("hello wolrd "+ response.message) });
//   });
// }


 function back(modelType, epochs) {
   console.log(modelType, epochs)
    console.log("button clicked! ");
        var j  = document.getSelection()  
        var parsedCode = j.toString().replaceAll(" ","<space>").split("\n")
        let resp = [0,j.toString(), modelType, epochs, parsedCode]
      chrome.runtime.sendMessage(resp, function (response) {});

  }
  function stop() {
    console.log("button clicked! ");
     
        let resp = [1,""]

      chrome.runtime.sendMessage(resp, function (response) {});

  }
  
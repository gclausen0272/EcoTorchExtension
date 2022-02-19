let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
// var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?stackoverflow\.com/;

// A function to use as callback
function doStuffWithDom(domContent) {
    console.log('I received the following DOM content:\n' + domContent);
}
function selection(){
    if (window.getSelection)
           return window.getSelection();
    }

    //TODO parse input and update url 
chrome.runtime.onMessage.addListener((request, sender, reply) => {
    const userAction = async (request) => {
        var realUrl = "https://eco-torch.herokuapp.com/api/v1/torch?paramName=" + pj
        
        const response = await fetch(realUrl);
        const bodyJson = await response.json();
        console.log(bodyJson)
        
        reply({message: bodyJson});
        return bodyJson
    }
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        console.log(activeTab)})
    console.log(request)
    if(request[0]==0){
    chrome.tts.speak(request[1]);
    }
   else if(request[0] ==1){
        chrome.tts.stop()
    }
    else{
        (async () => {
            console.log("await")
            var j = await userAction(request[1])
            console.log(j)
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){

                chrome.tabs.sendMessage(tabs[0].id,j); 
            });
            return j
        })()
    }

});
// When the browser-action button is clicked...
// chrome.runtime.onMessage.addListener(function (tab) {
//     // ...check the URL of the active tab against our pattern and...
//     if (urlRegex.test(tab.url)) {
//         // ...if it matches, send a message specifying a callback too
//         chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
//     }
// });



function selection(){
    if (window.getSelection)
           return window.getSelection();
    }

    //this takes the function call from the popup, where the api call will live 
chrome.runtime.onMessage.addListener((request, sender, reply) => {
    const userAction = async (request) => {

        //will need to update the parameters 
        var realUrl = "https://eco-torch.herokuapp.com/api/v1/torch?paramName=" + pj
        const response = await fetch(realUrl);

        const bodyJson = await response.json();
        console.log(bodyJson)
        
        reply({message: bodyJson});
        return bodyJson
    }

    //temp answer function to test popup/ service worker connection  && variable handoff 
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        console.log(activeTab)})
        console.log(request)
        if(request.Length == 5){
            console.log("text ")
            console.log(request.toString())
            chrome.tts.speak(request[0]);
        }
        else{
            console.log("image ")
            console.log(request.toString())
            chrome.tts.speak(request[0]);    
        }
//     if(request[0]==0){
//         chrome.tts.speak(request[1]);
//     }
//    else if(request[0] ==1){
//         chrome.tts.stop()
//     }
//     else{
//         (async () => {
//             console.log("await")
//             var j = await userAction(request[1])
//             console.log(j)
//             chrome.tabs.query({active: true, currentWindow: true}, function(tabs){

//                 chrome.tabs.sendMessage(tabs[0].id,j); 
//             });
//             return j
//         })()
//     }

});



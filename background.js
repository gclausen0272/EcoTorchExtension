
function selection(){
    if (window.getSelection)
           return window.getSelection();
    }
    const userAction2 = async (request) => {
        var realUrl = 'https://eco-torch.herokuapp.com/api/v1/text?epochs=' + request [2] +'&class=' + request[1] +'&maxlen=' + request[4]
       console.log(realUrl)
        const response = await fetch(realUrl, {method: 'POST' ,body: request[0]});

        const bodyJson = await response.json();
        console.log(bodyJson)
        
        return bodyJson
    }
    
    const userAction3 = async (request) => {

        //will need to update the parameters 
        // https://eco-torch.herokuapp.com/api/v1/text?code=dummycode&epochs=2&class=c&maxlen=1

        //https://eco-torch.herokuapp.com/api/v1/image?code=dummycode&epochs=2&class=c&height=1&width=2
        var realUrl = 'https://eco-torch.herokuapp.com/api/v1/image?epochs=' + request [2] +'&class=' + request[1] +'&height=' + request[4]+"&width="+request[5]
        console.log(realUrl)
        const response = await fetch(realUrl, {method: 'POST' ,body: request[0]});

        const bodyJson = await response.json();
        console.log(bodyJson)
        
        reply({message: bodyJson});
        return bodyJson
    }
    //this takes the function call from the popup, where the api call will live 
chrome.runtime.onMessage.addListener((request, sender, reply) => {
    console.log("hit")
    const userAction = async (request) => {

        //will need to update the parameters 
        // https://eco-torch.herokuapp.com/api/v1/text?code=dummycode&epochs=2&class=c&maxlen=1

        //https://eco-torch.herokuapp.com/api/v1/image?code=dummycode&epochs=2&class=c&height=1&width=2
        var realUrl = "https://eco-torch.herokuapp.com/api/v1/torch?paramName=" + pj
        const response = await fetch(realUrl);
        console.log(response)
        const bodyJson = await response.json();
        console.log(bodyJson)
        
        reply({message: bodyJson});
        return bodyJson;
    }

    //temp answer function to test popup/ service worker connection  && variable handoff 
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        console.log(activeTab)})
        console.log(request[3])
        if(request[3].toString() == 'textClass'){
            console.log("text ")
            console.log(request.toString())
            chrome.tts.speak(request.toString())
            userAction2(request);
        }
        else{
            console.log("image ")
            console.log(request.toString())
            chrome.tts.speak(request[0]);  
            userAction3(request);  
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



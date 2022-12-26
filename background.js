function retrieveData(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      var tabURL = tabs[0].url;
      console.log("The extension is opened on: " +tabURL)
    });
  }
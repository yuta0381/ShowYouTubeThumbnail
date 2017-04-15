window.onload = function() {
  chrome.tabs.getSelected(null, function(tab) {
    if (tab.url.match(/https:\/\/www\.youtube\.com\/watch\?v=[^&]+/)) {
      document.getElementById('img').src = "http://i.ytimg.com/vi/"+tab.url.match(/https:\/\/www\.youtube\.com\/watch\?v=([^&]+)/)[1]+"/mqdefault.jpg";
    }else{window.close();}
  });
} 

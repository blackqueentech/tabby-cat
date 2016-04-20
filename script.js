window.onload = function() {
var createNew = document.getElementById('createNew');
createNew.onclick = newSessionPage;
//var newURL = "new.html";
function newSessionPage() {
	var newURL = "new.html";
	chrome.tabs.create({ url: newURL });
}
}

//var links = chrome.window.getAll();
//function addTabsToSession() {
//  chrome.window.getAll()
//chrome.tabs.create
//}

//chrome.windows.onCreated.addListener(function addTabsToSession) {

    //}
    
//function allTabsToSession
//document.getElementById('createNew').addEventListener('click', openNew);
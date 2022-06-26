let color = '#2e8b57';

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ color });
	console.log('Default background color set to %cgreen', `color: ${color}`);
});

var todayday = new Date();
var todayday = today.getDate();
document.getElementById("today").innerHTML = 
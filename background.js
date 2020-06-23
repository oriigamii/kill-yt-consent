chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Sample Context Menu",
    "contexts": ["selection"]
  });
});

chrome.webNavigation.onCompleted.addListener(function (details) {
  chrome.tabs.executeScript(details.tabId, {
    file: 'blockAndRun.js'
  }, function (response) {
  });
});

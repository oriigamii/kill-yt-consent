chrome.webNavigation.onCompleted.addListener(function (details) {
  chrome.tabs.executeScript(details.tabId, {
    file: 'blockAndRun.js'
  }, function (response) {
  });
});

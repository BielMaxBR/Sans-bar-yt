chrome.browserAction.onClicked.addListener(function (activeTab) {
    const youtube = "https://www.youtube.com/";
    chrome.tabs.create({ url: youtube });
});
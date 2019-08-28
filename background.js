var status = 'pause';
var websiteUrl = 'https://aknigi.club';

chrome.browserAction.setIcon({ path: "img/icon.png" });
chrome.browserAction.setBadgeBackgroundColor({
    color: [0, 0, 0, 255]
});

function updateBadge() {
    switch (status) {
        case 'play':
            chrome.browserAction.setBadgeText({ text: "▶" });
            break;
        case 'pause':
            chrome.browserAction.setBadgeText({ text: "" });
            break;
    }
}

function togglePlay(tab) {
    chrome.tabs.executeScript(tab.id, {
        "file": "js/toggle.js"
    });
}

function onToggleAction() {
    chrome.tabs.query({}, function (tabs) {
        var audioTab = tabs.filter(function (tab) {
            return tab.url.includes(websiteUrl);
        });

        if (audioTab.length) {
            togglePlay(audioTab[0]);
        } else {
            chrome.tabs.create({ "url": websiteUrl });
        }
    });
}

chrome.browserAction.onClicked.addListener(function (tab) {
    onToggleAction();
});

chrome.commands.onCommand.addListener(function (command) {
    if (command === 'toggle-play') {
        onToggleAction();
    }
});

chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    status = request;
    updateBadge();
});

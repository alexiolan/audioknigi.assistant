var status = 'pause';
var websitePart = 'https://audioknigi.';
var websiteUrl = 'https://audioknigi.online';

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
  var code = '';

  switch (status) {
    case 'pause':
      code = "document.querySelector('.jp-play').click();";
      break;

    case 'play':
      code = "document.querySelector('.jp-pause').click();";
      break;
  }

  chrome.tabs.executeScript(tab.id, {
    code: code
  })
}

function onToggleAction() {
  chrome.tabs.query({}, function (tabs) {
    var audioTab = tabs.filter(function (tab) {
      return tab.url.includes(websitePart)
    });

    if (audioTab.length) {
      tab = audioTab[0];
    } else {
      chrome.tabs.create({ "url": websiteUrl });
      tab = getAudioClubTab();
    }

    if (tab) {
      togglePlay(tab);
    }
  });
}

chrome.browserAction.onClicked.addListener(function (tab) {
  onToggleAction()
});

chrome.commands.onCommand.addListener(function (command) {
  if (command === 'toggle-play') {
    onToggleAction()
  }
});

chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
   status = request;
   updateBadge();
});

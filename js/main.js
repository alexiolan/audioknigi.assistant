document.querySelector('.jp-audio .controls .play').addEventListener("click", function(){
  chrome.extension.sendMessage("play");
});

document.querySelector('.jp-audio .controls .pause').addEventListener("click", function(){
  chrome.extension.sendMessage("pause");
});

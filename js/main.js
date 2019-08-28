var AssistantModule = (function () {
    var self = this;
    var elements = [
        'div.button__player--play',
        'button.button__player--play'
    ];

    self.Toggle = function () {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (typeof document.querySelector(element) !== undefined) {
                console.log(element);

                document.querySelector(element).click();
                break;
            }
        }
    };

    // TODO: Fix later
    //self.Init = function () {
    //    var buttons = document.querySelectorAll(".button__player--play");
    //    for (var button of buttons) {
    //        button.addEventListener('click', function (event) {
    //            chrome.extension.sendMessage("toggle");
    //        });
    //    }
    //};

    return self;
})();

//(function () {
//    AssistantModule.Init();
//})();
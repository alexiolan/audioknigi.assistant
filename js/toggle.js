var elements = [
    'div.button__player--play',
    'button.button__player--play'
];

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (typeof document.querySelector(element) !== undefined) {
        console.log(element);

        document.querySelector(element).click();
        break;
    }
}
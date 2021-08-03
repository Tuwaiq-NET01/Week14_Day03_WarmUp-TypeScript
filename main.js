var one = 'AEIOULNRST';
var two = 'DG';
var three = 'BCMP';
var four = 'FHVWY';
var five = 'K';
var eight = 'JX';
var ten = 'QZ';
function calculate(word) {
    var total = 0;
    for (var i = 0; i < word.length; i++) {
        var value = getValue(word.charAt(i));
        total += value;
    }
    return total;
}
function getValue(char) {
    char = char.toUpperCase();
    if (one.indexOf(char) > -1)
        return 1;
    else if (two.indexOf(char) > -1)
        return 2;
    else if (three.indexOf(char) > -1)
        return 3;
    else if (four.indexOf(char) > -1)
        return 4;
    else if (five.indexOf(char) > -1)
        return 5;
    else if (eight.indexOf(char) > -1)
        return 8;
    else if (ten.indexOf(char) > -1)
        return 10;
    return 0;
}
var inputElement = document.getElementById("wordin");
var submitButton = document.getElementById("submit");
var outputElement = document.getElementById("scoreout");
submitButton.addEventListener("click", function () {
    var value = inputElement.value;
    outputElement.innerText = calculate(value).toString();
});

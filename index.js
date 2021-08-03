var KeysValue = {
    "1": ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    "2": ["D", "G"],
    "3": ["B", "C", "M", "P"],
    "4": ["F", "H", "V", "W", "Y"],
    "5": ["K"],
    "8": ["J", "X"],
    "10": ["Q", "Z"]
};
function GetStringValue(word) {
    var arrWord = word.split("");
    var value = 0;
    for (var index = 0; index < arrWord.length; index++) {
        for (var num in KeysValue) {
            if (KeysValue[num].includes(arrWord[index].toUpperCase())) {
                value += parseInt(num);
            }
        }
    }
    return value;
}
function showResult() {
    var input = document.getElementById("input-one");
    document.getElementById("output-one").innerHTML = GetStringValue(input.value).toString();
}
document.getElementById("button-one").addEventListener("click", showResult);

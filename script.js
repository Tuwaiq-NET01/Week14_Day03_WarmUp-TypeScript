var KeysValue = {
    "1": ["A",
     "E", 
     "I", 
     "O",
      "U", 
      "L", 
      "N", 
      "R", 
      "S", 
      "T"],
    "2": ["D",
     "G"],
    "3": ["B", 
    "C", "M", 
    "P"],
    "4": ["F", 
    "H",
     "V", 
     "W",
      "Y"],
    "5": ["K"],
    "8": ["J", "X"],
    "10": ["Q", "Z"]
};
function getValue(word) {
    var arrWord = word.split("");
    var value = 0;
    for (var index = 0; index < arrWord.length; index++) {
        for (var ele in KeysValue) {
            if (KeysValue[ele].includes(arrWord[index].toUpperCase()))
             {
                value =value+ parseInt(ele);
            }
        }
    }
    return value;
}
function Result() {
    var input = document.getElementById("Filed");
    document.getElementById("output").innerHTML = getValue(input.value).toString();
}
document.getElementById("btn").addEventListener("click", Result);

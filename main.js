var LetterScore;
(function (LetterScore) {
    LetterScore[LetterScore["A"] = 1] = "A";
    LetterScore[LetterScore["E"] = 1] = "E";
    LetterScore[LetterScore["I"] = 1] = "I";
    LetterScore[LetterScore["O"] = 1] = "O";
    LetterScore[LetterScore["U"] = 1] = "U";
    LetterScore[LetterScore["L"] = 1] = "L";
    LetterScore[LetterScore["N"] = 1] = "N";
    LetterScore[LetterScore["R"] = 1] = "R";
    LetterScore[LetterScore["S"] = 1] = "S";
    LetterScore[LetterScore["T"] = 1] = "T";
    LetterScore[LetterScore["D"] = 2] = "D";
    LetterScore[LetterScore["G"] = 2] = "G";
    LetterScore[LetterScore["B"] = 3] = "B";
    LetterScore[LetterScore["C"] = 3] = "C";
    LetterScore[LetterScore["M"] = 3] = "M";
    LetterScore[LetterScore["P"] = 3] = "P";
    LetterScore[LetterScore["F"] = 4] = "F";
    LetterScore[LetterScore["H"] = 4] = "H";
    LetterScore[LetterScore["V"] = 4] = "V";
    LetterScore[LetterScore["W"] = 4] = "W";
    LetterScore[LetterScore["Y"] = 4] = "Y";
    LetterScore[LetterScore["K"] = 5] = "K";
    LetterScore[LetterScore["J"] = 8] = "J";
    LetterScore[LetterScore["X"] = 8] = "X";
    LetterScore[LetterScore["Q"] = 10] = "Q";
    LetterScore[LetterScore["Z"] = 10] = "Z";
})(LetterScore || (LetterScore = {}));
var wordScore = function (word) {
    var value = 0;
    word = word.toUpperCase();
    for (var i = 0; i < word.length; i++) {
        value += LetterScore[word[i]];
    }
    return value;
};
console.log(wordScore("Hatem"));
function Result() {
    var input = document.getElementById("Filed");
    document.getElementById("output").innerHTML = wordScore(input.value).toString();
}
document.getElementById("btn").addEventListener("click", Result);

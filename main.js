var lib = {
    e: 1, a: 1, i: 1, o: 1, n: 1, r: 1, t: 1, l: 1, s: 1, u: 1,
    d: 2, g: 2,
    b: 3, c: 3, m: 3, p: 3,
    f: 4, h: 4, v: 4, w: 4, y: 4,
    k: 5,
    j: 8, x: 8,
    q: 10, z: 10
};
var calcScore = function (text) {
    var score = 0;
    text = text.toLowerCase();
    for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
        var ch = text_1[_i];
        score += lib[ch];
    }
    console.log(score);
    return score;
};
window.onload = function () {
    var input = document.getElementById("input");
    var submit = document.getElementById("test");
    var output = document.getElementById("output");
    submit.onclick = function () {
        console.log("no");
        if (input.value != "") {
            output.innerHTML = calcScore(input.value.trim()).toString();
        }
        else {
            output.innerHTML = "empty string";
        }
    };
};

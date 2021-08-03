var one = "AEIOULNRST";
var two = "DG";
var three = "BCMP";
var four = "FHVWY";
var five = "K";
var eight = "JX";
var ten = "QZ";
function a(a) {
    var result = 0;
    a = document.getElementById('name').value.toUpperCase();
    for (var letter in a) {
        if (one.includes(a[letter]))
            result += 1;
        if (two.includes(a[letter]))
            result += 2;
        if (three.includes(a[letter]))
            result += 3;
        if (four.includes(a[letter]))
            result += 4;
        if (five.includes(a[letter]))
            result += 5;
        if (eight.includes(a[letter]))
            result += 8;
        if (ten.includes(a[letter]))
            result += 10;
    }
    document.getElementById("result").innerText = result
    return result;
}

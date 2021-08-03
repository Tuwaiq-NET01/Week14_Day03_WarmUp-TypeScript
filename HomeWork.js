var one = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'S', 'T'];
var two = ['D', 'G'];
var three = ['B', 'C', 'M', 'P'];
var four = ['F', 'H', 'V', 'W', 'Y'];
var five = ['K'];
var six = ['J', 'X'];
var seven = ['Q', 'Z'];
function calculcateString(Sarawiq) {
    var count = 0;
    Sarawiq.toUpperCase().split('').forEach(function (element) {
        if (one.includes(element)) {
            count++;
        }
        else if (two.includes(element)) {
            count += 2;
        }
        else if (three.includes(element)) {
            count += 3;
        }
        else if (four.includes(element)) {
            count += 4;
        }
        else if (five.includes(element)) {
            count += 5;
        }
        else if (six.includes(element)) {
            count += 8;
        }
        else if (seven.includes(element)) {
            count += 10;
        }
        else {
            count += 0;
        }
    });
    return count;
}
console.log(calculcateString('Sarawiq'));

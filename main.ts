let one = 'AEIOULNRST';
let two = 'DG';
let three = 'BCMP';
let four = 'FHVWY';
let five = 'K';
let eight = 'JX';
let ten = 'QZ';

function calculate(word: string): number {
    let total = 0;
    
    for(let i = 0; i < word.length; i++)
    {
        let value = getValue(word.charAt(i));
        total += value;
    }
    
    return total;
}

function getValue(char: string): number {
    char = char.toUpperCase();

    if(one.indexOf(char) > -1) return 1;
    else if(two.indexOf(char) > -1) return 2;
    else if(three.indexOf(char) > -1) return 3;
    else if(four.indexOf(char) > -1) return 4;
    else if(five.indexOf(char) > -1) return 5;
    else if(eight.indexOf(char) > -1) return 8;
    else if(ten.indexOf(char) > -1) return 10;
    return 0;
}

let inputElement = document.getElementById("wordin");
let submitButton = document.getElementById("submit");
let outputElement = document.getElementById("scoreout");

submitButton.addEventListener("click", () => {
    let value = (<HTMLInputElement>inputElement).value;
    outputElement.innerText = calculate(value).toString();
});
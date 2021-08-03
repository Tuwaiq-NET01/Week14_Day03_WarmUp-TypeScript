let one:string = "AEIOULNRST"
let two:string = "DG"
let three:string ="BCMP"
let four:string ="FHVWY"
let five:string ="K"
let eight:string ="JX"
let ten:string ="QZ"
function a(a:any):number {
    let result:number=0;
    a = document.getElementById("input-text").value.toUpperCase();

    for (let letter in a) {
        if (one.includes(a[letter]))  result+=1
        if (two.includes(a[letter]))  result+=2
        if (three.includes(a[letter]))  result+=3
        if (four.includes(a[letter]))  result+=4
        if (five.includes(a[letter]))  result+=5
        if (eight.includes(a[letter]))  result+=8
        if (ten.includes(a[letter]))  result+=10
    }
    document.getElementById("h3Score").innerHTML = result;
    return result
}


console.log(a("Abdu lrahman"))
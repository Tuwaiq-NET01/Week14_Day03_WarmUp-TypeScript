const lib = {
    e:1, a:1, i:1, o:1, n:1, r:1, t:1, l:1, s:1, u:1,
    d:2, g:2,
    b:3, c:3, m:3, p:3,
    f:4, h:4, v:4, w:4, y:4,
    k:5,
    j:8, x:8,
    q:10, z:10
}

const calcScore = (text : any) => {
    let score = 0;
    text = text.toLowerCase();
    for (let ch of text) {
        score += lib[ch];
    }
    console.log(score);
    return score;
}

window.onload = function(){
    let input = <HTMLInputElement>document.getElementById("input");
    let submit = document.getElementById("test");
    let output = document.getElementById("output");
    submit.onclick = function() {
        console.log("no");
        if (input.value != "") {            
                output.innerHTML = calcScore(input.value.trim()).toString();            
        } else {
            output.innerHTML = "empty string"
        }
    }    
}
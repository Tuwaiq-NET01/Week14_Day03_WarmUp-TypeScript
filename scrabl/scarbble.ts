let tiers : string[] = ['aeioulnrst', 'dg', 'bcmp', 'fhvwy', 'k', 'jx', 'qz']

function scrabscor(name : string) {
    let score : number = 0;

    for(let i : number = 0; i < name.length; i++) {
        if(tiers[0].includes(name[i])) score += 1;
        if(tiers[1].includes(name[i])) score += 2;
        if(tiers[2].includes(name[i])) score += 3;
        if(tiers[3].includes(name[i])) score += 4;
        if(tiers[4].includes(name[i])) score += 5;
        if(tiers[5].includes(name[i])) score += 8;
        if(tiers[6].includes(name[i])) score += 10;
    }

    return score;
}

let input = document.querySelector('input');
let score = document.querySelector('#scrab');
input.addEventListener('keyup', (e) => {
    score.innerHTML = `Score is: ${scrabscor(input.value)}`
})
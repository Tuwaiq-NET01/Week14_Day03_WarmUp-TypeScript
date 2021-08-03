let list1: string = "aeioulnrstAEIOULNRST"
let list2: string = "dgDG"
let list3: string = "bcmpBCMP"
let list4: string = "fhvwyFHVWY"
let list5: string = "kK"
let list6: string = "jxJX"
let list7: string = "qzQZ"



function n(name : any): number {
    let weight: number = 0;
    for (let letter in name) {
        if (list1.includes(name[letter])) weight += 1
        if (list2.includes(name[letter])) weight += 2
        if (list3.includes(name[letter])) weight += 3
        if (list4.includes(name[letter])) weight += 4
        if (list5.includes(name[letter])) weight += 5
        if (list6.includes(name[letter])) weight += 8
        if (list7.includes(name[letter])) weight += 10
    }
    return weight
}

console.log(n("Abdulmajeed"))
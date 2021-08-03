let first: string = 'AEIOULNRST'
let second: string = 'DG'
let third: string = 'BCMP'
let fourth: string = 'FHVWY'
let fifth: string = 'K'
let eighth: string = 'JX'
let tenth: string = 'QZ'

function getCount(a: any): number {
  let result: number = 0
  a = a.toUpperCase()
  for (let letter in a) {
    if (first.includes(a[letter])) result += 1
    if (second.includes(a[letter])) result += 2
    if (third.includes(a[letter])) result += 3
    if (fourth.includes(a[letter])) result += 4
    if (fifth.includes(a[letter])) result += 5
    if (eighth.includes(a[letter])) result += 8
    if (tenth.includes(a[letter])) result += 10
  }
  return result
}

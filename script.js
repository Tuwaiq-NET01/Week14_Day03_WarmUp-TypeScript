var first = 'AEIOULNRST'
var second = 'DG'
var third = 'BCMP'
var fourth = 'FHVWY'
var fifth = 'K'
var eighth = 'JX'
var tenth = 'QZ'

function getCount(a) {
  var result = 0
  a = a.toUpperCase()
  for (var letter in a) {
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

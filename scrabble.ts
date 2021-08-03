const letters: { [key: string]: number } = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10,
};

document.getElementById("calculate").addEventListener("click", () => {
  let text: string = document.getElementById("word").value;

  text = text.toLocaleUpperCase().trim();

  let count = 0;

  for (let i = 0; i < text.length; i++) {
    const element = text[i];
    if (element == " ") {
      continue;
    }
    let num = letters[element];
    if (num == undefined) {
      continue;
    }
    count += num;
  }

  console.log(count);

  document.getElementById("total").innerHTML = count.toString();
});

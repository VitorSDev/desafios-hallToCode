let number = 12.8;
let numberResult = -160;

for (let i = 1; i < 51; i++) {
  if (i < 26) {
    if (i == 1) {
      numberResult += number;
      console.log(i / 10 + " segundo(s): " + numberResult);
    } else {
      numberResult = number + numberResult;
      console.log(i / 10 + " segundo(s): " + numberResult);
    }
  } else {
    numberResult = numberResult - number;
    console.log(i / 10 + " segundo(s): " + numberResult);
  }
}

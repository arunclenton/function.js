var a;
function oddoreven(a) {
  if (a % 2 == 0) {
    output = "The given number is even number";
  } 
  else {
    output = "The given number is odd number";
  }
  return output;
}
var result = oddoreven(51);
console.log(result);
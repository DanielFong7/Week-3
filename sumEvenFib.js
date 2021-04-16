let x = 1;
let y = 1;
let limit = 1000;
let sum = 0;

while ( x < limit && y < limit){
  if ( x % 2 == 0){
    sum+=x
  }
  if ( y % 2 == 0){
    sum+=y
  }
  x = x+y
  y = x+y
}
console.log(sum)
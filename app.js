function main()
{
  // exercise1(1,10);
  // exercise2();
  // exercise3(2);

  // exercise5();


}
main();



function exercise1(x1, x2)
{
  // make sure x2 isn't less than x1
  if (x2 <= x1) {
    console.log("-1");
  }
  // if x2 is greater than x1 then run this part
  else{
  // loop thorugh x1 all the way to x2 and print out the values in the console
  for (let index = x1; index <= x2; index++) {
    console.log(index);
  }
  }
}

function exercise2()
{
  // declare variable to show spot new line character appears
  let result = '\n';
  // loop through 1 thru 10 as columns
for (let i = 1; i < 11; i++) {
  // loop through 1 thru 10 as rows
    for (let j = 1; j < 11; j++) {
      // multiply i times j to get the value of each row times each column
        result += (i*j) + ' ';
    }
    // start a new row by finding where new line character appears
    result += '\n';
}
console.log(result);
}

function exercise3(number){
  // loop thru the multiplier 10 times
  for(let i = 1; i <= 10; i++) {

    // multiply i with number
    let result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}
}

function exercise4()
{
let numberofnumbers = Math.floor(500/23);
let startingpoint = 0;
let sum = 0;
for (let i = 0; i < numberofnumbers; i++) {
  
  startingpoint + 23;
  sum += 23;
}
console
}

function exercise5()
{
  let num1 = prompt("What's the first number?");
  let num2 = prompt("What's the second number?");
  max(num1,num2);
}

function max(num1, num2)
{
  if (num1>num2)
  {
    alert(num1);
  }
  else {
    alert(num2);
  }
}
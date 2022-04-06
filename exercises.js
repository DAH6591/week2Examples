var ageRequiredToDrive = 16;
var currentAge = 14;

var canPersonDrive = currentAge >= ageRequiredToDrive;
console.log(canPersonDrive);
//above is an example of a simple boolean expression w/out using conditional statements

// Boolean Operators:
  // Less than: <
  // Greater than: >
  // Less than or equal to: <=
  // Greater than or equal to: >=
  // Equal (type does not matter, i.e. "3" == 3 is true): ==
  // Strictly equal (type matters): ===

//Example of above code using an IF statement
  // the code below will show nothing in the console since the statement returns false.
  // If we change currentAge to 16; console will show the text.

var ageRequiredToDrive = 16;
var currentAge = 16;

if (currentAge >= ageRequiredToDrive){
    console.log("This person can drive");
}

//OR using all three variables defined in the first set of code:
  //code below returns a true for the canPersonDrive variable since the if statement is true. So 
  // the console will print out 'true' since that's the boolean value for canPersonDrive
  
var ageRequiredToDrive = 16;
var currentAge = 17;

var canPersonDrive = currentAge >= ageRequiredToDrive;
if (currentAge >= ageRequiredToDrive) {
    console.log(canPersonDrive);
}

//Example of an ELSE statement
  // If we want to do something else if the Boolean expression evaluates to false,
  // rather than simply doing nothing. Then we can use an ELSE statment. An else statement follows
  //  an IF statemnt and will execute only if the preceding IF statement's Boolean expression evaluates to false. 
  // Below code will cause the console to print out that person cannnot legally drive.
var ageRequiredToDrive = 16;
var currentAge = 14;
if (currentAge >= ageRequiredToDrive) {
    console.log('This person can drive')
} else {
    console.log('This person cannot legally drive');
}

//Example of an ELSE - IF statement
  // Used when there are more than two options in a decision. 
  // Below code shows how many containers we'll buy if cost is > 3; if cost > 2; if cost > 1 and if cost < 1
var costOfEggContainer = 1.99;
var numberOfEggContainerstoBuy = 0;

if(costOfEggContainer > 3) {
    numberOfEggContainerstoBuy = 1;
} else if (costOfEggContainer > 2) {
    numberOfEggContainerstoBuy = 2;
} else if (costOfEggContainer > 1) {
    numberOfEggContainerstoBuy = 3;
} else { 
    numberOfEggContainerstoBuy = 4;
}
  console.log('I will buy ' + numberOfEggContainerstoBuy + ' containers of eggs.');

  // 
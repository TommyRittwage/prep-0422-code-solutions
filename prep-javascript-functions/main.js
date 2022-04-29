function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(41, 73);
console.log('41+73 is', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(24);
console.log('24 hours is', minutes, 'minutes');

function getGreeting(name) {
  return 'What up, ' + name + '?';
}

var askWhatsUp = getGreeting('Tim');
console.log(askWhatsUp);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(2, 3);
console.log('Two plus three times five is', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(10, 10);
console.log('Ten times Ten divided by 5 is', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResult = subtractTwoNumbers(9000, 8999);
console.log('9000 minus 8999 is', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circleCircumference = getCircleCircumference(5);
console.log('A circle with the radius of 5 has a circumference of', circleCircumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Thomas', 'Rittwage');
console.log('My full name is', fullName);

function cube(number) {
  return number * number * number;
}

var cubeAnswer = cube(5);
console.log('Five cubed is', cubeAnswer);

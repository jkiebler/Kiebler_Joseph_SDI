/* Name: Joseph Kiebler
Class: SDI Section 01
Date: 10/08/2015
Assignment: Expressions Assignment */

//Variables

var payRate;  //global variable for rate of pay
var hoursWorked; //global variable for hours worked
var taxRate; //global variable for tax rate
var grossPay; //global variable for gross pay
var taxPaid; //global variable for tax paid
var netPay;  //global variable for net pay
var storageVar = [0, 1, 2, 3, 4]; //global variable to store data

//Main Code
alert("Welcome to my net pay calculator. I created this calculator to help me estimate what I would bring home on my paycheck. " +
            "This paycheck calculator assumes the data being entered is for a person in the state of Kentucky who claims no exceptions " +
            "on their W-4 and whose income falls in the slightly above minimum wage tax bracket.");  //Introduction for tool
payRate = prompt("What is your pay rate?");  //set value of payRate variable to what is entered in prompt
Number(payRate);  //convert payRate from string to number
storageVar[0] = payRate;  //set first value of storageVar to result

hoursWorked = prompt("How many hours will be on this check?");  //set value of hoursWorked to value of prompt
Number(hoursWorked); //convert hoursWorked from string to number
storageVar[1] = hoursWorked;  //set second value of storageVar to result

taxRate = prompt("What rate is your pay taxed at?"); //set value of taxRate to prompt
Number(taxRate);  //convert taxRate from string to number
storageVar[2] = taxRate;  //set third value of storageVar to result;

grossPay = (storageVar[0] * storageVar[1]); //set grossPay to value of calculation
storageVar[3] = grossPay;  //store grossPay as third value of storageVar array

taxPaid = storageVar[3] * (storageVar[2] / 100);  //set taxPaid to value of calculation
storageVar[4] = taxPaid;  //set the final value in the array to taxPaid

netPay = storageVar[3] - storageVar[4]; //set netPay to result of calculation

alert("Calculation done! Please see the console for your result!");  //alert instructing where to find result

console.log("You can expect $" + netPay + " on your next check.");  //display estimated value of paycheck
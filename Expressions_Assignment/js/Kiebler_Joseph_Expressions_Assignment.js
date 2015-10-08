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

//Main Code
alert("Welcome to my net pay calculator. I created this calculator to help me estimate what I would bring home on my paycheck. " +
            "This paycheck calculator assumes the data being entered is for a person in the state of Kentucky who claims no exceptions " +
            "on their W-4 and whose income falls in the slightly above minimum wage tax bracket.");  //Introduction for tool
payRate = prompt("What is your pay rate?");  //set value of payRate variable to what is entered in prompt
Number(payRate);  //convert payRate from string to number

hoursWorked = prompt("How many hours will be on this check?");  //set value of hoursWorked to value of prompt
Number(hoursWorked); //convert hoursWorked from string to number

taxRate = prompt("What rate is your pay taxed at?"); //set value of taxRate to prompt
Number(taxRate);  //convert taxRate from string to number

grossPay = (payRate * hoursWorked); //set grossPay to value of calculation

taxPaid = grossPay * (taxRate / 100);  //set taxPaid to result of equation

netPay = grossPay - taxPaid; //set netPay to result of calculation

console.log("You can expect $" + netPay + " on your next check.");  //display estimated value of paycheck
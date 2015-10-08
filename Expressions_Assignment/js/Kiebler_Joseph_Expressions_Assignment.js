/* Name: Joseph Kiebler
Class: SDI Section 01
Date: 10/08/2015
Assignment: Expressions Assignment */

//Variables

var payRate;  //global variable for rate of pay
var hoursWorked; //global variable for hours worked
var netPay;  //global variable for net pay

//Main Code
console.log("Welcome to my net pay calculator. I created this calculator to help me estimate what I would bring home on my paycheck. " +
            "This paycheck calculator assumes the data being entered is for a person in the state of Kentucky who claims no exceptions " +
            "on their W-4 and whose income falls in the slightly above minimum wage tax bracket.");  //Introduction for tool
payRate = prompt("What is your pay rate?");  //set value of payRate variable to what is entered in prompt
Number(payRate);  //convert payRate from string to number

hoursWorked = prompt("How many hours will be on this check?");  //set value of hoursWorked to value of prompt
Number(hoursWorked);

netPay = (payRate * hoursWorked) * 0.24;  //set netPay to result of equation
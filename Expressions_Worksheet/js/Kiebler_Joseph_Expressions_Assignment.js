/* Name: Joseph Kiebler
Class: SDI Section 01
Date: 10/08/2015
Assignment: Expressions Worksheet */

//Problem 1: Sparky

    //Variables
    var humanYears = 7;  //define Sparky's age in human years
    var dogYears;  //create empty variable for Sparky's age in dog years

    //Main Code
    dogYears = humanYears * 7;  //set dogYears to humanYears times 7
    
    console.log("Sparky is " + humanYears + " years old in human years, which is " + dogYears + " years old in dog years.";  //print result to console   
                



//Problem 2: Slice of Pie Part 1
                
    //Variables
    var numberPizzas = 10;  //variable for total number of pizzas ordered;
    var numberPeople = 15;  //variable for number of people
    var slicesPerPizza = 8;  //variable for number of slices per pizza
    var numberSlices = numberPizzas * slicesPerPizza;  //variable to determine total number of slices
    var numberPerPerson;
                
    //Main Code
    numberPerPerson = numberSlices / numberPeople;  //set value of numberPerPerson to result of equation
    console.log("Each person ate " + numberPerPerson + " slices of pizza at the party.";  //display result in console
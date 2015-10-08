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
    
    console.log("Sparky is " + humanYears + " years old in human years, which is " + dogYears + " years old in dog years.");  //print result to console   
                



//Problem 2: Slice of Pie Part 1
                
    //Variables
    var numberPizzas = 10;  //variable for total number of pizzas ordered;
    var numberPeople = 20;  //variable for number of people
    var slicesPerPizza = 8;  //variable for number of slices per pizza
    var numberSlices = numberPizzas * slicesPerPizza;  //variable to determine total number of slices
    var numberPerPerson;
                
    //Main Code
    numberPerPerson = numberSlices / numberPeople;  //set value of numberPerPerson to result of equation
    console.log("Each person ate " + numberPerPerson + " slices of pizza at the party.");  //display result in console
                
                
                
                
//Problem 3: Slice of Pie Part 2

    //Variables
    var pizzaForSparky;  //create empty variable for pizza for Sparky
    
    //Main Code
    pizzaForSparky = numberSlices - (numberPeople * numberPerPerson);  //set pizzaForSparky to result of equation
    console.log("Sparky got to eat " + pizzaForSparky + " slices of pizza."  //output result to console
                

                

//Problem 4: Average shopping bill

    //Variables
    var billTotals = [160, 135, 198, 156, 174]  //create array for weekly bill totals
    var totalSpent;  //empty variable for total spent
    var weeklyAvg;  //empty variable for average per week
                
    //Main Code
    totalSpent = billTotals[0] + billTotals[1] + billTotals[2] + billTotals[3] + billTotals[4];  //set total spent to result of equation
    weeklyAvg = totalSpent / 5;  //set weekly average to total spent divided by 5 days
    console.log("You have spent a total of $" + totalSpent + " on groceries over 5 weeks. That's an average of $" + weeklyAvg + " per week.");  //output                                                                                                                                                   to console





//Problem 5: Discounts

    //Variables
    var originalPrice = 120;  //variable for original price
    var discountPercentage = 45;  //variable for discount percentage
    var itemDescription = "Keurig coffee maker";  //string variable for item description
    var salesTax = 6;  //variable for sales tax
    var withTax;  //empty variable for with tax
    var sansTax;  //empty variable for without tax

    //Main Code
    sansTax = originalPrice - (originalPrice * (discountPercentage / 100));  //set value of sansTax to result of equation
    withTax = sansTax + (sansTax * (salesTax / 100));  //set value of withTax to reuslt of equation
    console.log("Your " + itemDescription + "was originally $" + originalPrice + ", but after a " + discountPercentage + "% discount it is $ " + sansTax +                  " without tax and $ " + withTax + " with tax.");  //output results to console
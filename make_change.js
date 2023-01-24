"use strict";
var $ = function(id) { return document.getElementById(id); };


function processEntry()
{
    let centsInput = parseInt($("cents").value); // Gets the user’s entry
    
    if(centsInput >= 0 && centsInput <= 99) //  checks to make sure that it is a number between 0 and 99.
    {
        makeChange(centsInput); // If the number is between 0 and 99, call the makeChange function for calculate the Quarters, Dimes, Nickels, and Pennies counts.
    }
    else{
        alert("Please enter a valid number."); // If the number is not between 0 and 99, display an alert dialog box for the error.
    }
}

function makeChange(centsInput) // Calculate and display the results in the text boxes for Quarters, Dimes, Nickels, and Pennies.
{
    let cents = parseInt(centsInput);
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;

    do
    {
        if (cents > 24 && cents <= 99) // Calculate the total quarter count
        {
            quarters = parseInt(cents / 25);
            cents = cents % 25;
        }
        else if (cents > 9 && cents <= 24) // Calculate the total dimes count
        {
            dimes = parseInt(cents / 10);
            cents = cents % 10;
        }
        else if (cents > 4 && cents <= 9) // Calculate the total nickels count
        {
            nickels = parseInt(cents / 5);
            cents = cents % 5;
        }
        else // Calculate the total pennies count
        {
            pennies = cents;
            cents = 0;
        }
    } while (cents > 0);

    document.getElementById("quarters").value = quarters; // Display the quarter values on Quarter textbox.
    document.getElementById("dimes").value = dimes; // Display the dimes values on Dimes textbox.
    document.getElementById("nickels").value = nickels; // Display the nickels values on Nickels textbox.
    document.getElementById("pennies").value = pennies; // Display the pennies values on Pennies textbox.
}

window.onload = function () // Adding the processEntry function to calculate button's click event.
{
    $("calculate").onclick = processEntry;
};
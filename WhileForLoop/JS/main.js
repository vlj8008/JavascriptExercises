// Tech Acad example of While Loop

function count_To_Ten() {
    var Digit = ""; // Declaring variable "Digit" and empty string.
    var X = 1; // Declaring the variable "X" equals one.
    while (X < 11) { // While these conditions exist do the code underneath. The condition is that X needs to be less than 11.
        Digit += "<br>" + X; // the "+=" adds the value of the right operand to the "digit" variable. 
        X++; // then increment operator adds one to the X variable.
    }
    document.getElementById("Counting_to_ten").innerHTML = Digit;
}

//My While Loop example

function Call_Loop() {
    var text = "";
    var i = 11;
    while (i > 0) {
        text += "<br>The number is " + i;
        i--;
    }
    document.getElementById("Loop").innerHTML = text;
}

// JS string length function

function stringLength() {
    var str = "Jump rope";
    var n = str.length; // includes the space in the calculation of how long the string length is. 
    document.getElementById("string_length").innerHTML = n;

}

//For Loop assignment

var instruments = ["Drums", "Piano", "Flute", "Oboe", "Zylophone"]; //creating a variable called "Instruments" using an array. An array allows you to store multiple variables
//in to a single variable. The syntax for an array is square brackets with items separated by a comma. 
var content = "";
var Y; // simply declaring a variable Y (but not assigning it yet)

function for_loop() {
    for (Y = 0; Y < instruments.length; Y++) { //This is the condition statement which means while this condition is in place execute the block of code beneath.
        // "++" means add one to the Y variable (which is the array position) and return the value. So if "Y" is less than the instrument length (5) and one to the Y value.

        content += instruments[Y] + "<br>"; // Assigning Instrument in position "Y" to the variable "content"

    }

    document.getElementById("list_of_instruments").innerHTML = content;
}

// Arrays assignment

function array_function() {
    var dog_pic = [];

    dog_pic[0] = "eating dinner";
    dog_pic[1] = "playing fetch";
    dog_pic[2] = "sleeping";
    dog_pic[3] = "burying a bone";
    dog_pic[4] = "jumping";

    document.getElementById("array").innerHTML = "In this picture the dog is " + dog_pic[2] + ".";
}

//Constant Keywords Assignment

function constant_function() {
    const race_horse_12 = { breed: "thoroughbred", name: "Red", color: "brown" }; //creating an object that is a constant. 
    races_won_first_year = 15; //assigning properties and values. 
    races_won_second_year = 19;
    races_won_third_year = 25;
    document.getElementById("constant").innerHTML = "The race horse " + race_horse_12.name + " in his third year won " + races_won_third_year + " races"; //using a property 
    //value and the "get element by ID" method. 
}

function constant_function() {
    const race_horse_12 = { breed: "thoroughbred", name: "Red", color: "brown" }; //creating an object that is a constant. 
    races_won_first_year = 15; //assigning properties and values. 
    races_won_second_year = 19;
    races_won_third_year = 33; //changed value of "races won third year" from 25 to 33. This did change the output below to 33.
    jockey_third_year = "Bob";//adding a new property and value
    document.getElementById("constant").innerHTML = "The race horse " + race_horse_12.name + " in his third year won " + races_won_third_year + " races. His jockey was " + jockey_third_year;
    //using the "get element by ID" method, and the added property (jockey_third_year) and the changed property (races_won_third_year). 
}

// "let" keyword assignment

var X = 82;
document.write("<br>" + X);

{
    let X = 102;
    document.write("<br>" + (X + 2));
} // the "let" keyword only applies to this block of code.

document.write("<br>" + (X + 2)); // JS uses the value 82, as it was the global variable.

//Using Return function
//Example 1
function returnFunction() {
    return Math.PI;
}
document.getElementById("return").innerHTML = returnFunction();
//Example 2
function myreturnFunction(name) {
    return "Hello " + name;
}

document.getElementById("return2").innerHTML = myreturnFunction("Vicky Lee Jones");

//Break statement

var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;


//Creating object using "let" keyword and including properties and a method

let horse = { //this "let" variable has global scope because declared outside the function, so means this variable can be accessed from anywhere
    // in the program. 
    breed: "Welsh", //Key value pair
    color: "brown",
    DOB: "1996",
    description: function () {// this is a method as it is an action performed on the object. 
        return "This horse is a " + this.breed + " and was born in " + this.DOB + " . It is a " + this.color + " color.";
    }

};
document.getElementById("horse").innerHTML = horse.description();

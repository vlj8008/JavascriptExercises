//Global Variable Tech Academy example

//var Y = 10; Variable outside of function means this variable is Global (it can be accessed from any function in the program.)
//function Add_numbers_1(){
// document.write(20 + Y + "<br>"); //writes "30" to HTML (the "<br>" means to go to next line.)
//}

//function Add_numbers_2(){
//  document.write(Y + 100); //writes "110" to HTML
//}

//Add_numbers_1(); //function called
//Add_numbers_2();// function called

//Local Variable Tech Academy example

//function Add_numbers_1(){
//var X = 10; // variable declared within function means it is a Local variable ( only able to be accessed by the function that it is declared in)
//document.write(20 + X + "<br>") //writes "30" to HTML

//}

//function Add_numbers_2(){
//   document.write(X + 100); //variable X has not been declared so doesn't return anything. 
//}

//Add_numbers_1(); //function called
//Add_numbers_2(); //function called

// Global Variable (My example)

var X = 10;
var Y = 20;

function Basic_add() {
    document.write(X + Y + "<br>");
}

function Basic_sub() {
    document.write(X - Y);
}

Basic_add();
Basic_sub();



// Local Variable (My example)

function Name_concate() {
    var X = "Vicky";
    var Y = "Jones";
    console.log(X + "<br>" + Y); //this displays correctly in the console
}

function Reverse_name_concate() { // intentionally written incorrect function. In console log on Chrome Dev Tools, it says Y is not defined. 
    console.log(Y + "<br>" + X);
}

Name_concate();
Reverse_name_concate();

//If Statement Assignment

//Tech Academy Example

function get_Date() {
    if (new Date().getHours() < 18) { // using conditional operator (less than) to compare the values either side of the operator.
        // the "get hours" method retruns the hour according to local time. 
        document.getElementById("greeting").innerHTML = "How are you today?"; // this outputs "How are you today", if the condition is met.
    }

}

// Method Assignment

function get_Hours() {

    if (new Date().getHours() < 12) {
        document.getElementById("hours").innerHTML = "Good morning!";
    }
}

// If Statement Assignment (my example)

var X = 10;
function if_Example() {

    if (X == 10) {
        document.getElementById("if_Example").innerHTML = " The variable is 10!";
    }
}

//Else Statement Tech Academy Example

function Age_Function() {
    Age = document.getElementById("Age").value; // using the = assignment operator to assign "Age" the value of whatever is in the HTML element that has the ID "Age" (which is the user's input)
    if (Age >= 18) { // using the "greater than or equal to conditional operator". If users age is greater than or less than 18....
        Vote = "You are old enough to vote!" // then "Vote" will be assigned the string "You are old enough to vote!"
    }
    else {
        Vote = "You are not old enough to vote!" // else, "Vote" will be assigned the string "You are not old enough to vote!"
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote; //Instructs computer to get the HTML element that has the Id "How_old_are_you?" and change the element to whatever the "Vote" value has been assigned.
}


//My Own Else Statement Example

function age_Comp() {
    age = document.getElementById("age_Comp").value;
    if (age >= 12) {
        output = "You can enter the competition!"
    }
    else {
        output = "You can NOT enter the competition"
    }
    document.getElementById("output").innerHTML = output;
}

// Else If Statement Tech Academy Example

function Time_function() {
    var Time = new Date().getHours(); //assigning local variables, using the "get hours" method
    var Reply; // assigning the variable called "Reply"
    if (Time < 12 == Time > 0) { // conditional statement using comparative operator.  "Is the time (gotten from the computer) less than 12 ", and is the "the time gotten 
        //from the computer greater than 0" ? If both are true, assign "Reply" the value of "It is morning time"
        Reply = "It is morning time!";
    }

    else if (Time >= 12 == Time < 18) { // Comparative operator: "is the time gotten from the computer greater than or equal to 12", and is "the time less than 18"?
        // If both are true then assign "Reply" the value of "It is afternoon"
        Reply = "It is afternoon";
    }

    else { // else assign the "Reply" value of "It is evening time"
        Reply = "It is evening time";

    }
 
    document.getElementById("Time_of_day").innerHTML = Reply;

}

// Intentionally write a function with an error, and debug in console log.

//function simple_Math(){ // when I clicked on my button nothing happened and the console came back with this message:
    // Uncaught Reference Error: Reply is not defined at simple_Math at HTML button element onclick. This message is due to the 
    //fact that I did not define the variable "Reply"
   //var X = 3
   // Reply;

   //if (X == 2){
    //   Reply = " the answer is equal to 3";

  // }

   //else{
    //   Reply = " the answer is not equal to 3";
  // }

  // document.getElementById("debug").innerHTML = Reply;

//}


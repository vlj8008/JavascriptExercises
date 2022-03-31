// Creating ternary function

function ride_funct(){ //naming the function "ride_funct"
    var height, can_ride; //naming two variables "height" and "can_ride"
    height = document.getElementById("height").value; //assigning the variable "height" by telling JS to go to the HTML element that has the ID = "height" and getting that value. That value is the value that the user types in
    can_ride = (height<52)? "You are too short":"You are tall enough"; //assigning the variable "can_ride". We use the ternary operator (?) to see if the height is less than 52. If it is we get an output
    //of "You are too short". If the ternary operator is false and the height is greater than 52, we get an output of "You are tall enough" (this is the string next to the colon [:]. The colon separates the statements. )

    document.getElementById("ride").innerHTML = can_ride + " to ride."; //this gets the element in the HTML document that has the ID "ride" and inserts the variable "can_ride" (as determined from the ternary function)
    // and concatenates the variable to the string " to ride". ie it either says "You are too short to ride", or, "You are tall enough to ride" (depending on the outcome of the ternary function)
}


function vote_age_checker(){
var age_input, vote_status;
age_input = document.getElementById("age_input").value;
vote_status = (age_input>17)? " Old enough":"Too young";
document.getElementById("result").innerHTML= vote_status + "  to vote";

}

// Constructor function that uses keyword "this"

function Vehicle(Make, Model, Year, Color){ //code for the object constructor. It is constructing the Vehicle object. Best practice is to name constructor function with capital first letter. 
    this.Vehicle_Make = Make; // keyword "this" indicates the owner of the code. In this case, the "this" is referring to "vehicle"
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;

}

//Constructor function that uses keyword "new"

var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red"); //assigning a variable called "Jack". Using "new" because this is a keyword that is used to create new objects. The values in the brackets describe
// make, model, year and color of vehicle, in that order. 
var Emily = new Vehicle ("Jeep", "Trial Hawk", 2019, "White and Black"); //making a new object (vehicle) called "Emily" 
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustang"); //making a new object (vehicle) called "Erik"

//Function that displays the result of the constructor function within an HTML element

function myFunction(){ //Naming the fuction "my function"

    document.getElementById("Keywords_and_Constructors").innerHTML= //this instruction tells JS to go in to the HTML document which has the ID "Keywords and Constructors"
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year; // tells JS what to change the HTML element to, using the values of the object "Erik"
}

//"New" keyword assignment

function Customer(Gender, Age){
    this.Customer_Gender = Gender;
    this.Customer_Age = Age;
}

var Joe = new Customer("Female", 27);
var Bob = new Customer("Male", 32);

function outputFunction(){
    document.getElementById("New_and_This").innerHTML=
    "Customer's gender is " + Joe.Customer_Gender + " and age is " + Joe.Customer_Age;
}

//Reserved Keyword Challenge

//var true = "twenty three";
//console.log("true"); // when I checked the console I got the message "Uncaught syntax error. Unexpected token 'true'.
// A token is a single element in a programming language. So the token "true" caused an error. 

//Object Constructor Function

function Student(Gender, Age, Grade){
    this.Student_Gender = Gender;
    this.Student_Age = Age;
    this.Student_Grade = Grade;
}

//Nested Function Assignment:

//Tech Acad Example

function count_Function(){ //name of function
    document.getElementById("Counting").innerHTML = Count(); //go in to the HTML document and get element that has the ID "Counting". Then modify that element and make it 
    //equal to the result of the function called "Count()".
    function Count(){ //the final result of this fuction gets inserted in to the HTML document with the ID Counting. 
        var Starting_point = 9; //sets the starting point variable to "9".

        function Plus_one() {Starting_point += 1;} // This function (called Plus_one) is the "nested" function. It takes the starting point (the number 9), and adds 1 to it. The "+="" is the addition operator
        // and adds the value of the right operand (1) to the variable and assigns the result to the variable (in this case the result would be 10)
        Plus_one(); //this executes the "Plus_one" function
        return Starting_point; // "return means return the value" back to the Starting point variable. 
    }

}

//My Nested Function example

function decrement_Function(){
    document.getElementById("Nested_Function").innerHTML = Decrement();

    function Decrement(){
        var Start = 22;

        function Minus_one(){Start -= 2; }
        Minus_one();
        return Start;
    }
}
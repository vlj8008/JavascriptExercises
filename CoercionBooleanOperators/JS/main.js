
// Using the "type of " operator to find out what data types are:


function myFunctionString() { // defining a function
    var x = "twenty one"; //assigning a variable a string value
    var ans = document.write(typeof x); //using the "type of" operator to determine what type of data it is.
    document.getElementById("str_type").innerHTML = ans; //inserting answer in to HTML

}

function myFunctionNum() {
    var x = 3033;
    var ans = document.write(typeof x);
    document.getElementById("num_type").innerHTML = ans;

}

//Writing an expression combining string and number:

function myCoerceFun() {
    ans = document.write("ten" + 6); //here there are two different data types, a string, plus a number.
    document.getElementById("coerce").innerHTML = ans; //JS being an untyped language does not return an error message. It is about to add a string with a number and the output is "ten6"

}

// Using JS to return NaN (not a number), Infinity, and Negative Infinity

function not_num_function() {
    document.getElementById("test").innerHTML = 0 / 0 // the value zero divided by zero returns NaN (Not a Number)

}

function infinity_display_function() {
    document.getElementById("testinf").innerHTML = document.write(2E310); // this function displays 2 times 10 to the power of 310 and returns "infinity"
}

function neg_inf_function() {
    document.getElementById("testinf").innerHTML = document.write(-3E310); // this function displays -3 times 10 to the power of 310 and returns "negative infinity"
}

//Using JS to check if a data value is NaN (Not a Number)

function nan_check_function() {

    document.getElementById("test1").innerHTML = isNaN("This is a string"); //this function checks "This is a string" to see if it is not a number,  and returns TRUE
    // because it is not a number. It is a string. 
}

function nan_check2_function() {
    document.getElementById("test2").innerHTML = isNaN(0007); // this function checks "0007" to see if it is not a number and returns FALSE because it is a number. 
}

// JS comparison operators:

function boole_greater() {
    document.getElementById("great").innerHTML = document.write(8 > 2); // this function uses comparison operator > and returns TRUE as 8 is greater than 2
}

function boole_lesser() {
    document.getElementById("less").innerHTML = document.write(8 < 2); // this function uses comparison operator and returns FALSE as 8 is not less than 2
}

function boole_equal() { // function using boolean operator and comparing left value with right value to see if equal, and returning TRUE because values are. 
    document.getElementById("equal").innerHTML = document.write(10 == 10);
}

function boole_nequal() { // function using boolean operator and comparing left value with right value to see if equal, and returning FALSE because the values are. 
    document.getElementById("nequal").innerHTML = document.write(2 == 10);
}

//Triple equal sign assignment:

x = 82;
y = 9;
console.log(x === y); // this returned a FALSE in the console because although the data type is the same (numerical) the values were not the same.

x = 82;
y = 82;
console.log(x === y); // a) this returned a TRUE in the console because BOTH the data type and the data value are equal. 

x = "eight",
    y = 22;
console.log(x === y); //b) this returned a FALSE in the console because BOTH the data type and the value are not equal. 

x = 'eight';
y = 8;
console.log(x === y); // c) this returned a FALSE because the data types are not the same. There is a string and a number. 

x = 8;
y = 9;
console.log(x === y); // d) this returned a FALSE because although the data type is the same the values are different. 

//Using console.log

console.log(2 + 92); //using arithmetic and displaying on the console in browser
console.log(2 > 100); //using boolean operator and displaying in console in browser
console.log(2 == (1 + 3));

//Boolean Logical operators: AND, OR, and NOT

//AND (&&) operator

console.log(4 > 3 && 2 < 9); //this returned TRUE because BOTH values either side of the AND operator are true. 

console.log(4 < 3 && 2 == 2); //this returned FALSE because only one value was true (2==2)

// OR (||) operator

console.log(2 == 3 || 2 < 3); //this returned TRUE because one of the values either side of OR was true. 

console.log(1 == 3 || 2 < 1); //this returned FALSE because both of the values are False.

//NOT (!) operator

function not_function() {
    document.getElementById("not").innerHTML = !(3 == 2); //returns TRUE because it is FALSE that 3 is equal to 2 (the NOT operator returns the opposite)
}

function not_function2() {
    document.getElementById("not1").innerHTML = !(3 == 3); //returns FALSE because it is TRUE that 3 is equal to 3 (the NOT operator returns the opposite)
}





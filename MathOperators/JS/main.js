// Addition fuction

function addition_function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition; //This inserts result in to specific HTML part with same ID.
}

// Subtraction Function 

function sub_function() {
    var subtraction = 5 - 1;
    document.getElementById("sub").innerHTML = "5 - 1 = " + subtraction;//This inserts result in to specific HTML part with same ID.
}


// Multiplication Function
function mult_function() {
    var multiplication = 6 * 8;
    document.getElementById("mult").innerHTML = " 6 times  8 = " + multiplication;//This inserts result in to specific HTML part with same ID.
}


// Division Function
function div_function() {
    var division = 49 / 7;
    document.getElementById("div").innerHTML = "49 divided by 7 equals " + division;//This inserts result in to specific HTML part with same ID.
}


// Multiple mathematical operations
function multiple_math() {
    var ans = ((2 + 20) * 10 - 1) / 2;
    document.getElementById("multiple").innerHTML = "two plus twenty times 10 minus one divided by two equals " + ans;//This inserts result in to specific HTML part with same ID.
}


//Modulus Function

function mod_function() {
    var ans = 9 % 4;
    document.getElementById("mod").innerHTML = "the remainder when you divide 9 by 4 is " + ans;//This inserts result in to specific HTML part with same ID.
}



// Negation Operator Function

function neg_op() {
    var x = 20;
    document.getElementById("neg").innerHTML = "The opposite of 20 is " + -x;//This inserts result in to specific HTML part with same ID.
}


// Increment Operator Fuction

function inc_op() {
    var x = 5.63
    x++;
    document.getElementById("incr").innerHTML = "Counting up equals " + x;//This inserts result in to specific HTML part with same ID.
}



// Decrement Operator Function

function dec_op() {
    var x = 5.63
    x--;
    document.getElementById("decr").innerHTML = "Counting down equals " + x;//This inserts result in to specific HTML part with same ID.
}


//Random Number Generator

function random_gen() {
    var x = (Math.random() * 100);
    document.getElementById("random").innerHTML = "Your number is " + x;//This inserts result in to specific HTML part with same ID.
}



//Math Object - built in object that has properties and methods. 

//Math Object Method:

function ceil_funct() {
    var a = Math.ceil(2.5);
    document.getElementById("ceil_funct").innerHTML = "The answer equals " + a;//This inserts result in to specific HTML part with same ID.
}





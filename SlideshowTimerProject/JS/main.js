
//Countdown timer

function countdown() {
    var seconds = document.getElementById("seconds").value; //assigning a local variable by getting the value that the user input in to the box with the ID "seconds" in the HTML document. 

    function tick() { //naming the function "tick"
        seconds = seconds - 1; // using the assignment operator to assign seconds to be seconds  minus 1
        timer.innerHTML = seconds; // using the assignment operator to assign the HTML element with the ID "timer", the seconds value gotten from the line of code above. This will display the 
        //seconds value as they count down in the HTML document with the ID "timer". 
        setTimeout(tick, 1000); // using the setTimeout method. This method calls the tick function for a number of milliseconds. The "1000" means 1000 milliseconds, which equals 1 second.
        //in other words, the "tick" function will be called for 1 second, and then will time out. It will then be called again for 1 second and then time out ...ad infinitum.
        if (seconds == -1) { // the == compares the seconds value to the value -1 and when that is true executes the following line of code. 
            alert("Times up!"); //brings up an alert box that says "Times up!"
        }
    }
    tick(); //calling the tick function.
}

//Slide show bar


var slideIndex = 1; // assigning the Global variable "slideIndex" to a value of 1. I believe this is referring to the first photo (the programming photo)
showSlides(slideIndex); //calling the "showSlides" function and telling it to show the slide with the index "1" (the programming photo)


//Next/previous control FUNCTION

function plusSlides(n){ //naming a function "plusSlides" and defining a parameter "n". The event for this function is when the "next" symbol in the HTML doc is clicked. The "n" is an index for the 
//slide show length. 
showSlides(slideIndex += n);
 // This part of the function (between the curly brackets) tells the computer what code to be executed. It will call the "showSlide" function, 
}//meaning it will go to the next image. (+= means add one to the n value).



// Dot control FUNCTION

function currentSlide(n){ // naming a function "current slide" and giving it a parameter of "n". The event for this function is when the dot symbol in the HTML doc is clicked. 
    showSlides(slideIndex = n); //shows the current "dot" slide
}

// Showing slide FUNCTION


function showSlides(n){ //naming a function "showSlides" and assigning a parameter "n" which is an index for the slideshow length. 

var i; //declaring a local variable called "i". The "i" stands for the slides themselves. 

var slides= document.getElementsByClassName("mySlides"); //assigning a value to the variable called "slides" by going in to the HTML document to the element that has the class "mySlides" (which is the image).

var dots = document.getElementsByClassName("dot"); //assigning a value to the variable called "dots" by going to the HTML document and getting the element that has the class name "dot".

if (n > slides.length){slideIndex = 1} // if slide number (n) is greater than the total number of slides (slide length) make the slide equal to 1 again (the programming photo).

if (n < 1) {slideIndex = slides.length} // if slide number is less than 1, make the slide number equal 3 (the slide length) which is the keyboard photo.

for (i = 0; i < slides.length; i++){ // "for" loop. The "i = 0" sets a variable before the loop starts. The "i < slide.length" defines a condition. Meaning the "i" has to be less than 3. The "i++" means to increment
// the variable by 1 each time code block below has been executed. 
    slides[i].style.display = "none"; //don't display the slide with the corresponding value "i" 
}

for (i = 0; i < dots.length; i++){ // replace each of the dots with the class "active" with ""
    dots[i].className = dots[i].className.replace(" active", "");
}

slides[slideIndex-1].style.display = "block";// set the current slide to display as a block element (A block-level element always starts on a new line.

//A block-level element always takes up the full width available [stretches out to the left and right as far as it can]).

dots[slideIndex-1].className += " active"; //set the current slide's respective dot to the "active " class. The += symbol is the addition assignment operator and adds a value to a variable ("dots")
}
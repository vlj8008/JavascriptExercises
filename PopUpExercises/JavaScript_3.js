// Tech Academy Example Function using the HTML Data Attributes

function displayType(character){ //parameter is "character"
    var characterType = character.getAttribute("data-character-type"); //creating a variable called "characterType" and making it equal to the value of "data-character-type" which 
    //is "Batman"
    alert(characterType + " is in the " + character.innerHTML + " universe!"); //create an alert box. Character type equals "Batman" and character.innerHTML refers to getting
    //the HTML from the "character"  element which is "DC", so it the alert box reads: "Batman is in the DC universe"

}

//My own function using the HTML data attribute. 

function displayYear(horse){
    var kenYear = horse.getAttribute("data-kentucky-year");
    alert(horse.innerHTML + " won the Kentucky derby in " + kenYear);

}
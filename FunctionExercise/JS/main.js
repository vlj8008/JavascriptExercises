function fontColorChangeFunction() { // Function 1 : Defining the function and calling it "Font Color Change"
    var str = "This text is now blue" //Defining a string variable and giving it the value "This text is now blue."
    var result = str.fontcolor("blue"); //Defining the "result variable" which equals the string (above) changed to a blue color. 
    document.getElementById("blue_text").innerHTML=result; 
}// // The document.getElementByID finds the element in the HTML document that has
    // the ID name "blue_text". This elememnt is "Click me!" (the text inside the button). The .innerHTML modifies this text, and changes it to whatever the result variable equals which is the string "This text
    //is now blue" in the blue font..



function change_para_function() { // Function 2 : Defining the function and calling it "change (para)graph function"
document.getElementById("change_para").innerHTML = "See I told you so" //The document.getElementByID finds the element in the HTML document that has
// the ID name "change_para". This elememnt is "Try me!". The .innerHTML modifies the "Try me!" sentence, and changes it to "See I told you."

}

function conFunction(){ // Function 3: Naming the function "conFunction" because it returns a concatenated string.  
    var sentence = "I think you are nice"; // first part of the sentence. 
    sentence += " and alot of fun to be around."// the "+=" sign concatenates the second part of the sentence to the first.
    document.getElementById("concatenate").innerHTML = sentence; // The document.getElementByID finds the element in the HTML document that has
    // the ID name "concatenate". This elememnt is "Click here!". The .innerHTML modifies the "Click here!" sentence, and changes it to whatever the variable "sentence"
    // is. (in this case: "I think you are nice and alot of fun to be around.")
}

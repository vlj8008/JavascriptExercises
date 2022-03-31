function my_dictionary(){ //assigning my function a name. 
    var Horse = {//assigning a variable "horse"
    Species: "Horse",  //assigning some key value items
    Color: "Brown",
    Breed: "Thoroughbred",
    Age: 5, // no need for quotation marks as data type is numerical. 
    Name: "Rosie"
    };
    document.getElementById("dictionary").innerHTML = Horse.Breed; // inserts the horse breed (thoroughbred) in to the HTML element that has 
    //the ID "dictionary"
    delete Horse.Color; //this deletes the "Color" key value pair from the dictionary. 
    document.getElementById("col").innerHTML = Horse.Color; //this attempts to insert into the HTML element that has an ID of "col" the Color value from the dictionary. As it was deleted on the line above it 
    //returns the value "undefined"

}
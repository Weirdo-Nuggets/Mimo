//variables firstname and lastname can be changed based on player
var firstname = "ChocoLety";
var lastname = "Nuggets";
//the username is the firstname and lastname
var username = "Username: " + firstname + " " + lastname;
//run
console.log(username);

//character's name
var characterName = "Chicken Maker"
var character = "Character: " + characterName;
console.log(character);

//the value of the username and character variables will be output in the name and onOff ids in the HTML doc.
document.getElementById("name") .innerHTML = username;
document.getElementById("onOff") .innerHTML = character ;

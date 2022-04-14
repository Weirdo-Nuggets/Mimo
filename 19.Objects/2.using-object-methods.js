var dog = {
    name: "Bo",
    bark: function(word) {
        return "woof woof" + word;
    }
};
console.log(dog.bark(" Feed ME!"));

var myCereal = {
    name: "Trix",
    display: function() {
        this.name = "Cap'n Crunch";
        console.log(this.name);
    }
};
myCereal.display();
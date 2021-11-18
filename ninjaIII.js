class Ninja{
    constructor(name) {
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
    }

    sayName(){
        console.log("My ninja name is " + this.name);
        return this;
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed : ${this.speed}, Strength : ${this.strength}`);
        return this;
    }

    drinkSake() {
        this.health += 10;
        return this;
    }
    //I kept next to methods since them could be used from Sensei Class as well
    punch(otherNinja){
        // check if opponent is Ninja
        if ( otherNinja instanceof Ninja == true){
            otherNinja.health -=5;
        console.log(`${otherNinja.name} was punched by ${this.name} and decrease 5 Health to ${otherNinja.name}!`);
        return this;
        }else{
            console.log("The other person isn't ninja, you shouldn't fight back him/her");
        }
    }
    kick(otherNinja){
        // check if opponent is Ninja
        if (otherNinja instanceof Ninja == true){
            otherNinja.health -= 15;
            console.log(`${otherNinja.name} was kicked by ${this.name} and decrease 15 health to ${otherNinja.name}!`);
            return this;
        }else{
            console.log("The other person isn't ninja, you shouldn't fight back him/her");
        }
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one coder can do in one month, two coders can do in two months.");
        return this;
    }
}


//Testing Ninja Class 
/*
var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
*/

//Testing Ninja Class with kick and punch methods
/*
let jackyChan = new Ninja("Jacky Chan");
let bruceLee = new Ninja("Bruce Lee");
let person = ("Elon Musk");

jackyChan.sayName();
bruceLee.sayName();

jackyChan.punch(bruceLee);
bruceLee.kick(jackyChan);
bruceLee.kick(person);

jackyChan.showStats();
bruceLee.showStats();
*/

let ninja1 = new Ninja("Hyabusa");
ninja1.drinkSake();
let superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
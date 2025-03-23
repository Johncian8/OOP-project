window.ondblclick = ()=>{

    window.location.href = "../choose/choose.html"
}

let dog = document.querySelector("#dog")
let cat = document.querySelector("#cat")
let dragon = document.querySelector("#dragon")
let bird = document.querySelector("#bird")
let aligator = document.querySelector("#aligator")
let lion = document.querySelector("#lion")
let display = document.querySelector("h1")

//abstranction
//with polymorphism
class Animal{

    
    constructor(names){
        if(this.constructor == Animal){
    
            //bawal ma instatiate kasi abstract masyado or broad
            throw new Error("This class cannot be instanciated")
        }

        this.names = names

    }

    makeSound(){

        //method na dapat ma override 
        throw new Error("This method should be overrided")
    }
}

//dog class
class Dog extends Animal{

    constructor(names){

        super(names)
    }

    makeSound(){

        return(`${this.names} says Arf Arf`)
    }
}

dog.onclick = ()=>{

    const dog1 = new Dog("Dog")

    display.innerHTML = dog1.makeSound()
}

//cat class
class Cat extends Animal{

    constructor(names){

        super(names)
    }

    makeSound(){

        return(`${this.names} says Meow Meow`)
    }
}

cat.onclick = ()=>{

    const cat1 = new Cat("Cat")

    display.innerHTML = cat1.makeSound()
}


//dragon class
class Dragon extends Animal{
    
    constructor(names){
        
        super(names)
    }
    
    makeSound(){
        
        return(`${this.names} says Growl Growl`)
    }
}

dragon.onclick = ()=>{

    const dragon1 = new Dragon("Dragon")

    display.innerHTML = dragon1.makeSound()
}

//class bird
class Bird extends Animal{

    constructor(names){

        super(names)
    }

    makeSound(){

        return(`${this.names} says Tweet Tweet`)
    }
}

bird.onclick = ()=>{

    const bird1 = new Bird("Bird")

    display.innerHTML = bird1.makeSound()
}

//aligator class
class Aligator extends Animal{

    constructor(names){

        super(names)
    }

    makeSound(){

        return(`${this.names} says Chirp Chirp`)
    }
}

aligator.onclick = ()=>{

    const aligator1 = new Aligator("Aligator")

    display.innerHTML = aligator1.makeSound()
}

//lion class
class Lion extends Animal{

    constructor(names){

        super(names)
    }

    makeSound(){

        return(`${this.names} says Roar Roar`)
    }
}

lion.onclick = ()=>{

    const lion1 = new Lion("Lion")

    display.innerHTML = lion1.makeSound()
}


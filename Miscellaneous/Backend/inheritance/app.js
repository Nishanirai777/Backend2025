class Mammal{
    constructor(name){//parenst class
        this.name= name;
        this.type = "warm-blooded"
    }
    eat(){
        console.log("i am eating ");
    }
}
class Dog extends Mammal{
    constructor(name){//child
        super(name);
    }
    bark(){
        console.log("woff...");

    }
}
class Cat extends Mammal{
    constructor(name){//child
        super(name);
    }
    meow(){
        console.log("meow meow..!");
    }
}

class Person {
    constructor(name='Anonymous',age=0){
        this.name=name;
        this.age=age;
        }
    getGreeting() {
        return `Hi I am ${this.name}`
    }
    //Yukarıdaki örnek bir template string örneğidir. Template stringleri kullanabilmek için altgr+ ,
    //tuşlarına iki kere basılması sonucu oluşan "backtick"leri kullanmak gerekir.
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}



class Student extends Person {
    constructor(name, age ,major='undecided'){
        super(name,age);
        this.major=major;
    }
    hasMajor()
    {
        return !!this.major
    }
    getDescription(){
        let description=super.getDescription();

        if (this.hasMajor()) {
            description+= ` Their major is ${this.major}`
        }
        return description;
    }
}
class Traveler extends Person{
    constructor(name,age, homeLocation)
    {
        super(name,age)
        this.homeLocation=homeLocation
    }
    getGreeting()
    {
        let greeting=super.getGreeting();

        if (this.hasHomeLocation()) {
            greeting+=` I'm from ${this.homeLocation}.`
        }
        return greeting;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
}
// const me=new Student('Andrew Mead',26,'Computer Science');
// console.log(me);
// console.log(me.getGreeting())
// console.log(me.getDescription())
// console.log(me.hasMajor())
// const other=new Student();
// console.log(other);
// console.log(other.getGreeting())
// console.log(other.getDescription())
// console.log(other.hasMajor())

const me=new Traveler('Andrew Mead',26,'Philadelphia');
console.log(me.getGreeting())
const other=new Traveler();
console.log(other.getGreeting())
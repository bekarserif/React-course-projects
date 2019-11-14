// arguments object - no longer bound with arrow functions

const add=function (a,b)
{
    console.log(arguments)
    return a + b;
}
console.log(add(55,1,1001));
// Normal bir fonksiyon tanımlamasında fonksiyon 2 parametre alsa bile biz birden fazla parametre gönderip
// bu gönderdiğimiz parametrelere arguments değişkeni içerisinden erişebiliriz.


// const add2=(a,b)=>
// {
//     console.log(arguments)
//     return a + b;
// }
// console.log(add2(55,1,1001));

//Fakat arrow functionlarda bu argumentse artık erişmek mümkün olmuyor.



//this keyword - no longer bound 

const user={
    name:'Andrew',
    cities : ['Philadelphia','New York','Dublin'],
    printPlacesLived() {
        return this.cities.map((city)=>{
            return this.name + ' has lived in ' + city;
        })
    }
}

console.log(user.printPlacesLived());
//normalde this değişkeni içerisindeki value içerisinde bulunduğu objenin bilgilerini tutar.Yani user içerisinde
//tanımlanmış bir fonksiyonda this valuesu user içerisindeki bilgilere erişir.
//Fakat user içerisinde tanımlanmış bir fonksiyon içerisinde tanımlanmış bir fonksiyonda(printPlacesLived)
//this valuesuna erişilemez. Bunun için fonksiyon içerisinde const that=this gibi bir tanımlama yapılır.

const user2={
    name:'Andrew',
    cities : ['Philadelphia','New York','Dublin'],
    printPlacesLived:function () {
        const that=this;
        console.log(this.name)
        console.log(this.cities)
        this.cities.forEach( (city) =>{
            console.log(that.name + ' has lived in ' + city);
        });
    }
} 

user2.printPlacesLived();

//Fakat arrow function olarak tanımlanan fonksiyonlarda this bir üstü olarak tanımlanan fonksiyonun
//içerisinde tanımlanan değişkenleri alır.
//yani ES5 fonksiyon tanımlamasında this içerisinde bulunduğu objenin değerini, ES6 arrow fonksiyonu
//tanımlamasında ise this bir üst objenin içerisindeki değerleri alır.



const multiplier={
    numbers :[5,4,3,2,1],
    multiplyBy : 4,
    multiply(){
        return this.numbers.map((number)=>number* this.multiplyBy)
    }
}

console.log(multiplier.multiply());
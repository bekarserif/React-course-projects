import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
ReactDOM.render(<p>This is my boilerplate</p>,document.getElementById('app'))



class OldSyntax {
    constructor(){
        this.name= 'Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting(){
        return `Hi. My name is ${this.name}`;
    }
}
const oldSyntax=new OldSyntax();
const greet= oldSyntax.getGreeting;


console.log(oldSyntax.name); 
console.log(greet());
/*old syntax içerisinde fonksiyon tanımlandığımız zaman bu fonksiyonu constructor içerisinde bind etmemiz
gerekir. Aksi takdirde fonksiyon doğrudan bir değişkene tanımlandığında bindingi olmadığı için fonksiyon
içerisindeki this.name hata verecektir.*/
class NewSyntax{
    name='Jen';
    getGreeting=()=>{
        return `Hi. My name is ${this.name}`;
    }
}
/*new syntax içerisinde ise tanımladığımız fonksiyon bir arrow function olarak tanımlandı. 
Arrow functionların içerisinde kullanılan this*/
const newSyntax = new NewSyntax();
console.log(newSyntax.name);
console.log(newSyntax.getGreeting())
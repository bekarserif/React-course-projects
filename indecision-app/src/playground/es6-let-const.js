var nameVar='Serif'
var nameVar='Mike'

console.log('nameVar: ',nameVar)

//Var olarak tanımlanan değişkenler tekrar başlarına var koyarak yeniden tanımlanabilir.


let nameLet='Serif'
nameLet='Andrew'

console.log('nameLet: ',nameLet)

//Fakat let olarak tanımlanan değişkenler tekrardan tanımlanamaz. Ancak içlerindeki değer değiştirilebilir.

const nameConst='Serif'

console.log('nameConst',nameConst)

//Const olarak tanımlanan değişkenler ise yeniden tanımlanamaz yada içerisine başka bir değer alamaz. Yani sabit değişkenlerdir.

function GetMeName() {
    const petName='Hal'
    return petName;
}

//console.log(petName);
//Yukarıdaki örnekteki gibi fonksiyonlar içerisinde tanımlanan hiç bir değişkene dışarıdan erişilemez.

const fullName='Jen Mead';


if (fullName) {
    var firstName=fullName.split(' ')[0];
    console.log(firstName)
}
console.log(firstName)

//let ve const tanımlaması yapıldığında aşağıdaki console.log hata verirken var tanımlaması yapıldığında çalışır. Çünkü let ve constta if içerisi child scope olarak tanımla-
//nırken var tanımlamasında aynı scopedaymış gibi davranır.

if (fullName) {
    let firstName2=fullName.split(' ')[0];
    console.log(firstName2)
}

//Yukarıdaki gibi let tanımlanarak firstName2nin scope içerisinde

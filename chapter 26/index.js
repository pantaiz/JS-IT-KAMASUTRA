function Dog(name) {
    this.dogname=name;
    this.voice=function () {
        console.log('Hey')
    }
}


var dog=new Dog('laika')
console.log(dog)
var dog1=new Dog('elon musk')
console.log(dog1)
var dog2=new Dog('barsik')
console.log(dog2)
console.log(dog)

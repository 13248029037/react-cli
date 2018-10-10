function Person (age,name){
    this.age = age
    this.name = name
    this.hoby='443tt3'
}
Person.prototype.fly =function (){
    console.info('i can fly')
}

function Childs (age,name){
    Person.call(this,age,name)
}

Childs.prototype = new Person();

var c5 = new Childs()

c5.hoby='343o943'

var c6 = new Childs()
var c7 = new Childs()
var c8 = new Childs()
var c9 = new Childs()
c5.__proto__.hoby='4454'
c5.__proto__.fly=function(){console.info('xiao')}
console.info(c5)
console.info(c6.hoby)
c7.fly()
console.info(c8.hoby)
console.info(c9.hoby)
console.info(c9.hoby)


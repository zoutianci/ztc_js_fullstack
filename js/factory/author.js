function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    return this.name;
}
var wxf = new Person('汪西发');
console.log(wxf.name);

//IT工程师
function Coder(name,languages){
    Person.call(this,name);
    // 父类没有的可以加
    // 语言
    this.languages = languages;
}
// new Person 新的对象就是Coder的原型对象
Coder.prototype = new Person();
Coder.prototype.construtor = Coder;
Coder.prototype.getLanguages = function(){
    // console.log(this.languages);
    return this.languages;
}

var xjy = new Coder('徐加元',['javascript','python','c/c++']);
console.log(xjy.name + '     '+ xjy.languages.join(','));
console.log(xjy.getName());
console.log(xjy.getLanguages());
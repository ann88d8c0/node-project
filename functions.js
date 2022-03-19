const sayHello = () => { return "Hello" }; 

const sayHello2 = () => "Hellno"; 

function sayHello3() {
    return "hello"
};

console.log(sayHello());
console.log(sayHello2());
console.log(sayHello3());


module.exports = {
    sayHello,
    sayHello2,
    sayHello3
};

console.log("plik functions.js zostal zaladowany prawidlowo");
/*
camelCase
snake_case

CONSTANTES_IMMUTABLES ( pi, adresse api, ect... )
 */

let a = (10 + 20) * 3;
// +, - , /, %, *
a++; // incrémentation ( a = a + 1 )
a--; // décrémentation ( a = a - 1 )
++a;
--a;
a += 2; // a = a + 2
a /= 2;
a *= 2;
a -= 2;
a %= 2;

let b = 1;
console.log(--b); // 0 : l'opération se fait avant l'affichage
b = 1;
console.log(b--); //1 : l'opération se fait après l'affichage
b = 0;
// Attention : 0 est falsy

if(b) {
    console.log('B est true ou truthy');
} else {
    console.log('B est false ou falsy');
}

let str; // falsy
str = ""; // falsy
str = "    "; // truthy
let numb = 0; // falsy
numb = -2; // truthy
let arr = []; // truthy car Array
let obj = {}; // truthy car Object

if(!str) { // Si str est falsy
    str = "ma nouvelle chaîne";
}
/*
 ===
 !==
 < > <= >=

 || ou
 && et
 */

const bool = 10 > 5 && 20 < 10;

str = '';
str = str || "ma nouvelle chaîne";
str ||= "ma nouvelle chaîne"; // ES2021

numb = 0;
numb ||= 10; // 0 est falsy donc 10
console.log(numb)

numb = 0;
numb ??= 10; // si null ou undefined => 0
console.log(numb)

numb = undefined;
numb ??= 10; // 10
console.log(numb);

// Assigne la valeur si la variable est truthy
numb &&= 50;

// String
let str2 = "Hello World \" ";
str2 = 'Bonjour le monde \' ';
str2 = `alt gr + 7 "" ''`;
const name = "Toto";
const address = "7 rue des Lilas";
const city = "Montpellier";

const message = name + ' habite au ' + address + ' ' +
    'dans la belle ville de ' + city;
const msg = `${name} habite au ${address} ${10 + 10}
à ${city}`; // attention, prend en compte le retour à la ligne
console.log(msg);

const user_input = "     coucou   ";
user_input.trim(); // supprime les espaces avant et après
user_input.split('');
/*
Doc :
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/match
 */

/* Syntaxe Fonction **/

function sum(a, b) {
    return a + b;
}

const sum2 = function (a, b) {
    let toto = a;
    return a + b;
}

// Arrow Function
const sum3 = (a, b) => a + b;
const sayHello = msg => console.log("Mon message : " + msg);
const encoreUneFonction = () => {
    // Instructions
    return 0;
}
/*
Si c'est des fonctions en 1 ligne,
on évite les accolades, le retour est implicite
 */
[].forEach(function (el) {
    // faire quelque chose
});

[].forEach(el => {
    // faire quelque chose
});

function displayEl(el) {
    console.log(el)
}

[].forEach(displayEl);

function doStuff(a, func) {
    // faire des trucs
    func(a)
}

doStuff(10, (arg) => console.log(arg));

// Destructuration
const fruits = ['pommes', 'poires', 'abricots'];
const [truc1, truc2, truc3, truc4, ...rest] = fruits;
console.log("----------- destructuration")
console.log(truc4); // string "pommes"
console.log(rest); // tableau

const fruits2 = [truc1, truc2, truc3, ...rest];
const copy = [...fruits]; // ou Array.from(fruits)
copy.push('fraises');
console.log(copy);
console.log(fruits);

const user = {
    name: 'Toto',
    adresse: '24 rue des fleurs',
}
// Dans un objet, les noms de variables doivent être exactement les mêmes que les
// noms de propriétés qu'on veut récupérer
const {adresse, name: nom, age = 45} = user;
//const adresse = user.adresse;
//const name = user.name;
console.log(adresse);
const user_bis = {name, bidule: 'valeur'};
const machin = {name: 'titi'}
console.log(user_bis.name);
//const {name} = machin;
// {adresse: adresse, name: name }
console.log(name);








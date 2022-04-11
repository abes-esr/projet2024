/**
 * Javascript :
 * Langage interprété
 * S'exécute sur le navigateur : ( V8 moteur Chromium, SpiderMonkey )
 * Non fortement typé
 *       - typage dynamique
 *       - typage non définitif
 *
 * Types primitifs :
 * - String
 * - Number ( int, float, double.... )
 * - Boolean -> true / false / Falsy
 * - null
 * - undefined
 *
 * Structures:
 * Array, Map
 *  Dates
 */

// Variables globales
var toto_var = "Hello World !";
let toto_let = "Bonjour le monde";

console.log(toto_let);
console.log(toto_var);

function displayToto() {
    console.log(toto_let);
    console.log(toto_var);
    if(true) {
        console.log(toto_let);
        console.log(toto_var);
    }
}
displayToto();

// Variables déclarées dans une fonction
function createTiti() {
    var titi_var = 'coucou - var';
    let titi_let = 'coucou - let';
}
createTiti();
// Uncaught reference error pour les 2 variables
//console.log(titi_var);
//console.log(titi_let);

// Variables déclarées dans des blocks
// blocks : instructions (if, for, ..... ) entre {}
if(true) {
    var tutu_var = "tutu var";
    let tutu_let = "tutu let";
}
/*
 -> Let à une portée de block {},
 -> var à une portée de fonction
 */
console.log(tutu_var);
//console.log(tutu_let);

function testBlock() {
    var a = 1;
    let b =  1;
    if(true) {
        var a = 2; // Déclaration dupliquée, mais même variable
        let b = 2; // Créé un homonyme, une deuxième variable temporaire
        console.log("dans le if : ", a, b);
        b+= 10;
        console.log("B + 10 = ", b); // 2 + 10 = 12
    }
    console.log("var a = ", a); // 2
    console.log("let b = ", b); // 1
}
testBlock();

// Objet litteral
/*
  accolades {}
  nom de l'attribut : valeur de l'attribut,
 */
let user = {
    prenom : 'John',
    nom : 'Doe',
}
console.log( user.prenom )

const arr = [];
for(var i = 0; i <= 5; i++) {
    (function (index) {
        var u = {
            name: 'var user ' + i,
            displayRank() {
                console.log(this.name + ' ' + index)
            }
        }
        arr.push(u);
    } )(i)
}
console.log(arr)
arr.forEach(u => u.displayRank());

/******** Closures *******/

(function (a) {
    console.log(a);
    var machin = 10;
})('coucou')

// Avec let :
const arr_let = [];
for(let i = 0; i <= 5; i++) {
    let u = {
        nom: 'u-let ' + i,
        displayRank() {
            console.log('Rank ( let ) ' + i);
        }
    }
    arr_let.push(u);
}
arr_let.forEach(u => u.displayRank());

/*
Let :
mot clef pour déclarer les varibles, arrivé en 2015 avec ES6

const : même porté que let ( block )
-> un constante
 */
const str = "Hello World";
//str = "interdit";

const arr2 = ['Pomme', 'Poire'];
// arr2 = []; // Interdit

// Push ( nombre d'args infini )
arr2.push('Abricot', 'Epinards');
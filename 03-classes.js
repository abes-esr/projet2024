class Animal {
    #nom;
    #age;
    couleur = "gris";

    constructor(nom, age) {
        this.#nom = nom;
        this.#age = age;
    }


    get nom() {
        return this.#nom;
    }

    set nom(value) {
        this.#nom = value;
    }
}

class Cat extends Animal {
    humain;
    static count = 0;

    constructor(nom, age, humain) {
        super(nom, age);
        this.humain = humain;
        Cat.count++;
    }
    // Méthode
    dominerLeMonde() {
        console.log(this.nom + ' dominera le monde quand l\'heure de la sieste sera passée');
    }

    // Propriété
    dominerLeMondeBis = function () {
        console.log(this.nom + ' dominera le monde quand l\'heure de la sieste sera passée');
    }

    // Propriété
    dominerLeMondeTers = () => console.log(this.couleur + ' dominera le monde quand l\'heure de la sieste sera passée');
}

const a = new Animal('Cactus', 10);
console.log(a.nom);
a.nom = 'Banzaï';
console.log(a.nom);

const cat = new Cat('Cactus', 10, 'titi');
cat.dominerLeMonde();
cat.dominerLeMondeBis();
cat.dominerLeMondeTers();

const cat_litteral = {
    nom: 'Mistigri',
    dominerLeMonde() {
        console.log(this.nom + ' dominera le monde quand l\'heure de la sieste sera passée');
    },
    dominerLeMondeBis : function () {
        console.log(this);
    },
    dominerLeMondeTers : () => console.log(this)
}

cat_litteral.dominerLeMonde();
cat_litteral.dominerLeMondeBis();
cat_litteral.dominerLeMondeTers();


console.log( cat instanceof Cat); // boolean
console.log(cat instanceof Animal); //
console.log(cat instanceof Object); //

console.log( cat['couleur'] )
cat['nourriture'] = 'Beaucoup de croquettes';

for(let props in cat) {
    console.log('propriété : ', props)
}

// Tableau de string qui contient les propriétés de l'objet
console.log(Object.keys(cat));

console.log(Cat.count);

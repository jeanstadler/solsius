// Faire une fonction prenant toutes les commandes qui affiche la liste des produits avec à côté la quantité de ces produits dans l'ensemble des commandes.

const commands = [
    {
        _id: "1",
        date: 1234566789900,
        totalPrice: 475,
        products: {
            refA: 3,
            refB: 5
        }
    },
    {
        _id: "2",
        date: 1234566789900,
        totalPrice: 475,
        products: {
            refB: 4
        }
    }
];

const products = [
    {
        ref: "refA",
        name: "A",
        price: 75
    },
    {
        ref: "refB",
        name: "B",
        price: 50
    }
];


// function getCommands(): Promise<Array<Command>>;
// retourne de manière asynchrone une liste de toutes les commandes.


// function getProducts(refList: Array<string>|null): Promise<Array<Product>>;
// retourne de manière asynchrone une liste de produits correspondants à la liste de référence passée.
// si refList est null, cette focntion retourne tous les produits.

function analyzeCommands() {
    // initialise un objet pour stocker les quantités totales par produit
    const result = {};
    
    // parcourt toutes les commandes
    for (const command of commands) {
        // pour chaque produit dans la commande courante
        // ici on boucle sur les "products" des commandes (refA / refB etc...)
        console.log(command)
        // ici on boucle sur les références des product command !
        for (const productRef in command.products) {
            console.log("✅",productRef)
            console.log("ceci prend la clé", productRef)
            console.log("ceci prend la valeur =>", command.products[productRef])

            // si le produit existe déjà dans "result"
            if (result[productRef]) {
                // ici on l'ajoute avec le +=
                result[productRef] += command.products[productRef];
            } else {
                // sinon, on la crée avec la quantité de cette commande
                result[productRef] = command.products[productRef];
            }
        }
    }
    
    // retourne le resultat
    return result;
}

analyzeCommands()

 

/*

node /Users/jeanstadler/Desktop/Solsius/exo2/exo2.js

*/

// const result = {
// refA: 3,
// refB: 9
// };
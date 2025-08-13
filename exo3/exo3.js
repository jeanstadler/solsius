const organisation = {
    name: "entreprise",
    securityCheck: "03/10/2021",
    services: [
        {
            name: "commercial",
            securityCheck: "03/10/2021",
            services: [
                {
                    name: "vente",
                    securityCheck: "14/11/2021"
                },
                {
                    name: "marketing",
                    securityCheck: "30/06/2020"
                },
                {
                    name: "communication",
                    securityCheck: "08/03/2021",
                    services: [
                        {
                            name: "design",
                            securityCheck: "27/07/2021"
                        }
                    ]
                }
            ]
        },
        {
            name: "technique",
            securityCheck: "24/08/2021",
            services: [
                {
                    name: "electronique",
                    securityCheck: "14/11/2021"
                },
                {
                    name: "robotique",
                    securityCheck: "30/06/2020",
                    services: [
                        {
                            name: "mécanique",
                            securityCheck: "12/08/2021"
                        },
                        {
                            name: "automatisme",
                            securityCheck: "01/09/2021"
                        },
                        {
                            name: "IA",
                            securityCheck: "07/09/2021"
                        }
                    ]
                }
            ]
        },
        {
            name: "logistique",
            securityCheck: "03/10/2021",
            services: [
                {
                    name: "transport",
                    securityCheck: "14/11/2021"
                },
                {
                    name: "etiquetage",
                    securityCheck: "30/06/2020"
                },
                {
                    name: "nettoyage",
                    securityCheck: "05/09/2021"
                }
            ]
        }
    ]
}

// fonction pour récupérer tous les services qui n'ont pas eu de vérification depuis X mois
function securityUncheckedSince(data, nbMonth) {
    // initialise un tableau pour stocker les résultats
    const result = [];
    date = organisation.securityCheck;
    console.log(date)
    
    // parcourt tous les services principaux
    for (const service of organisation.services) {
        // console.log("dans le service", service)
        
        // vérifier si le service principal est trop vieux
        var aujourd_hui = new Date();
        // on découpe la date du service (format "DD/MM/YYYY")
        var date_service = service.securityCheck.split('/');
        var jour = date_service[0];
        var mois = date_service[1];
        var annee = date_service[2];
        // on crée un objet Date avec les valeurs récupérées
        var date_check = new Date(annee, mois - 1, jour);
        // on calcule la date limite (aujourd'hui - nbMonth)
        var limite = new Date();
        limite.setMonth(limite.getMonth() - nbMonth);
        
        // si la date du service est plus ancienne que la limite
        if (date_check < limite) {
            // on ajoute le nom du service au résultat
            result.push(service.name);
        }
        
        // maintenant on parcourt tous les sous-services de chaque service
        for (const services_information of service.services){
            console.log("✅ c'est les services de chaques service =>",services_information.name,"/ici c'est la date =>" ,services_information.securityCheck)
            // console.log(services_information)
            
            // dans la situation où il y a un service dans un service (sous-sous-service)
            if (services_information.services){
                console.log("⚠️ on est dans la situation o`il y a un service dans le service =>",services_information.name,"ici c'est la date =>", services_information.securityCheck)
            }
            
            // transformer les dates en string (pour pouvoir les manipuerler)
            var maintenant = new Date();
            // on découpe la date du sous-service
            var date_string = services_information.securityCheck.split('/');
            var jour2 = date_string[0];
            var mois2 = date_string[1];
            var annee2 = date_string[2];
            // on crée l'objet Date du sous-service
            var date_du_service = new Date(annee2, mois2 - 1, jour2);
            // on utilise la même date limite calculée plus haut
            var date_limite = new Date();
            date_limite.setMonth(date_limite.getMonth() - nbMonth);
            
            // comparer la date avec la date référent
            if (date_du_service < date_limite) {
                // ajouter au result
                result.push(services_information.name);
            }
            
            // gérer la récursivité pour les sous-sous-services (services dans les services)
            if (services_information.services){
                console.log("⚠️ on est dans la situation où il y a un service dans le service =>",services_information.name,"ici c'est la date =>", services_information.securityCheck)
                // on parcourt chaque sous-sous-service
                for (const subService of services_information.services) {
                    // on découpe la date du sous-sous-service
                    var sous_date = subService.securityCheck.split('/');
                    var sous_jour = sous_date[0];
                    var sous_mois = sous_date[1];
                    var sous_annee = sous_date[2];
                    // on crée l'objet Date du sous-sous-service
                    var sous_date_complete = new Date(sous_annee, sous_mois - 1, sous_jour);
                    // on compare avec la même date limite
                    if (sous_date_complete < date_limite) {
                        // si c'est trop ancien, on l'ajoute au résultat
                        result.push(subService.name);
                    }
                }
            }
        }
    }
    // on retourne le tableau avec tous les services qui n'ont pas été vérifiés
    return result;
}

// on teste la fonction avec l'organisation et 3 mois comme limite
console.log(securityUncheckedSince(organisation, 3));
// -----------------------------

// const result = securityUncheckedSince(organisation, 3);

// result = [
// "marketing"
// ,
// "communication"
// ,
// "design"
// ,
// "technique"
// ,
// "robotique"
// ,
// "mécanique"
// ,
// "automatisme"
// ,
// "etiquetage"
// ,
// "nettoyage"
// ];

/* 

node /Users/jeanstadler/Desktop/Solsius/exo3/exo3.js

*/


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

// en gros récupérer tous ceux 
function securityUncheckedSince(data, nbMonth) {
    const result = [];
    date = organisation.securityCheck;
    console.log(date)
    for (const service of organisation.services) {
        // console.log("dans le service", service)
        for (const services_information of service.services){
            console.log("✅ c'est les services de chaques service =>",services_information.name,"/ici c'est la date =>" ,services_information.securityCheck)
            // console.log(services_information)
            // dans la situation où il y a un service dans un service
            if (services_information.services){
                console.log("⚠️ on est dans la situation o`il y a un service dans le service =>",services_information.name,"ici c'est la date =>", services_information.securityCheck)
            }
            // transformer les dates en string (pour pouvoir les manipuerler)
            //comparer la date afvec la date référent
            //ajouter au result
        }
    }
    }


securityUncheckedSince();
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


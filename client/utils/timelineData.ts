import TimelineData from "../types/TimelineData";

const timelinesData = (isEnglishSelected: boolean): TimelineData[] =>
  isEnglishSelected
    ? [
        {
          title: "qualifications",
          content: [
            {
              title: "bsc",
              location: "leicester - university",
              text: [
                "computer architecture: <strong>96%</strong>",
                "discrete mathematic: <strong>93%</strong>",
                "advenced programming: <strong>90%</strong>",
              ],
              date: "2021 -",
            },
            {
              title: "a level",
              location: "winchester - peter symonds",
              text: [
                "mathematic: <strong>A*</strong>",
                "computer science: <strong>A*</strong>",
                "french: <strong>A</strong>",
              ],
              date: "2019 - 2021",
            },
            {
              title: "gcse",
              location: "Southampton - st mary's",
              text: [
                "french: <strong>8</strong>",
                "mathematic: <strong>7</strong> ",
                "physics: <strong>6</strong>",
              ],

              date: "2015 - 2019",
            },
          ],
        },
        {
          title: "experiences",
          content: [
            {
              title: "waiter",
              location: "carnac - la grande metairie",
              text: [
                "Greeted and seated customers in a 130-guest restaurant",
                "Took food and drink orders from customers as needed",
                "Managed the bar area and served food and drinks",
              ],
              date: "3 months - 2021",
            },
            {
              title: "seller",
              location: "ploërmel - weldom",
              text: [
                "Learned about stock management and orders with a qualified seller",
                "Ticketed, arranged and displayed merchandise to promote sales",
              ],
              date: "2 months - 2020",
            },
            {
              title: "seller",
              location: "ploërmel - jouet club",
              text: [
                "improved my customer service and communication skills",
                "was in charge of welcoming customers",
                "learnt about items shelving, labelling products.",
              ],
              date: "2 months - 2029",
            },
          ],
        },
      ]
    : [
        {
          title: "Qualifications",
          content: [
            {
              title: "bsc",
              location: "leicester - university",
              text: [
                "architecture: <strong>96%</strong>",
                "mathématique: <strong>93%</strong>",
                "programmation avancée: <strong>90%</strong>",
              ],
              date: "2021 -",
            },
            {
              title: "a level",
              location: "winchester - peter symonds",
              text: [
                "mathématique: <strong>A*</strong>",
                "informatique: <strong>A*</strong>",
                "français: <strong>A</strong>",
              ],
              date: "2019 - 2021",
            },
            {
              title: "gcse",
              location: "Southampton - st mary's",
              text: [
                "français: <strong>8</strong>",
                "mathématique: <strong>7</strong> ",
                "physique: <strong>6</strong>",
              ],

              date: "2015 - 2019",
            },
          ],
        },
        {
          title: "Experiences",
          content: [
            {
              title: "serveur",
              location: "carnac - la grande metairie",
              text: [
                "reçu et accueillie les clients dans un restaurant de 130 places",
                "Pris les commandes de plats et boissons des clients",
                "Gèré la zone bar et le service des boissons et des plats",
              ],
              date: "3 mois - 2021",
            },
            {
              title: "vendeur",
              location: "ploërmel - weldom",
              text: [
                "Appris à gérer le stock et les commandes avec un vendeur qualifié",
                "étiqueté, arrangé et affiché les marchandises pour promouvoir les ventes",
              ],
              date: "2 mois - 2020",
            },
            {
              title: "vendeur",
              location: "ploërmel - jouet club",
              text: [
                "Développé mon service client et ma communication",
                "Etait en charge de la bienvenue des clients",
                "Appris à ranger les articles, les étiqueter",
              ],
              date: "2 mois - 2029",
            },
          ],
        },
      ];

export default timelinesData;

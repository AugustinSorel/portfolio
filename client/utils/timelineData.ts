import { TimelineData } from "../types/TimelineData";

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
                "Computer Architecture: <strong>96%</strong>",
                "Discrete Mathematic: <strong>93%</strong>",
                "Advenced Programming: <strong>90%</strong>",
              ],
              date: "2021 -",
            },
            {
              title: "a level",
              location: "winchester - peter symonds",
              text: [
                "Mathematic: <strong>A*</strong>",
                "computer Science: <strong>A*</strong>",
                "French: <strong>A</strong>",
              ],
              date: "2019 - 2021",
            },
            {
              title: "gcse",
              location: "Southampton - st mary's",
              text: [
                "French: <strong>8</strong>",
                "Mathematic: <strong>7</strong> ",
                "Physics: <strong>6</strong>",
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
                "Improved my customer service and communication skills",
                "Was in charge of welcoming customers",
                "Learnt about items shelving, labelling products.",
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
                "Architecture: <strong>96%</strong>",
                "Mathématique: <strong>93%</strong>",
                "Programmation avancée: <strong>90%</strong>",
              ],
              date: "2021 -",
            },
            {
              title: "a level",
              location: "winchester - peter symonds",
              text: [
                "Mathématique: <strong>A*</strong>",
                "Informatique: <strong>A*</strong>",
                "Français: <strong>A</strong>",
              ],
              date: "2019 - 2021",
            },
            {
              title: "gcse",
              location: "Southampton - st mary's",
              text: [
                "Français: <strong>8</strong>",
                "Mathématique: <strong>7</strong> ",
                "Physique: <strong>6</strong>",
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
                "Reçu et accueillie les clients dans un restaurant de 130 places",
                "Pris les commandes de plats et boissons des clients",
                "Géré la zone bar et le service des boissons et des plats",
              ],
              date: "3 mois - 2021",
            },
            {
              title: "vendeur",
              location: "ploërmel - weldom",
              text: [
                "Appris à gérer le stock et les commandes avec un vendeur qualifié",
                "Étiqueté, arrangé et affiché les marchandises pour promouvoir les ventes",
              ],
              date: "2 mois - 2020",
            },
            {
              title: "vendeur",
              location: "ploërmel - jouet club",
              text: [
                "Développé mon service client et ma communication",
                "Était en charge de la bienvenue des clients",
                "Appris à ranger les articles, les étiqueter",
              ],
              date: "2 mois - 2029",
            },
          ],
        },
      ];

export default timelinesData;

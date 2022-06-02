import { TimelineData } from "../types/TimelineData";

const timelinesData = (isEnglishSelected: boolean): TimelineData[] => [
  {
    title: isEnglishSelected ? "qualifications" : "qualifications",
    content: [
      {
        title: "bsc",
        location: "leicester - university",
        text: [
          isEnglishSelected
            ? "Computer Architecture: <strong>96%</strong>"
            : "Architecture: <strong>96%</strong>",
          isEnglishSelected
            ? "Discrete Mathematic: <strong>93%</strong>"
            : "Mathématique: <strong>93%</strong>",
          isEnglishSelected
            ? "Advenced Programming: <strong>90%</strong>"
            : "Programmation avancée: <strong>90%</strong>",
        ],
        date: "2021 -",
      },
      {
        title: "a level",
        location: "winchester - peter symonds",
        text: [
          isEnglishSelected
            ? "Mathematic: <strong>A*</strong>"
            : "Mathématique: <strong>A*</strong>",
          isEnglishSelected
            ? "computer Science: <strong>A*</strong>"
            : "Informatique: <strong>A*</strong>",
          isEnglishSelected
            ? "French: <strong>A</strong>"
            : "Français: <strong>A</strong>",
        ],
        date: "2019 - 2021",
      },
      {
        title: "gcse",
        location: "Southampton - st mary's",
        text: [
          isEnglishSelected
            ? "French: <strong>8</strong>"
            : "Français: <strong>8</strong>",
          isEnglishSelected
            ? "Mathematic: <strong>7</strong>"
            : "Mathématique: <strong>7</strong>",
          isEnglishSelected
            ? "Physics: <strong>6</strong>"
            : "Physique: <strong>6</strong>",
        ],

        date: "2015 - 2019",
      },
    ],
  },
  {
    title: "experiences",
    content: [
      {
        title: isEnglishSelected ? "waiter" : "serveur",
        location: "carnac - la grande metairie",
        text: [
          isEnglishSelected
            ? "Greeted and seated customers in a 130-guest restaurant"
            : "Reçu et accueillie les clients dans un restaurant de 130 places",
          isEnglishSelected
            ? "Took food and drink orders from customers as needed"
            : "Pris les commandes de plats et boissons des clients",
          isEnglishSelected
            ? "Managed the bar area and served food and drinks"
            : "Géré la zone bar et le service des boissons et des plats",
        ],
        date: `3 ${isEnglishSelected ? "months" : "mois"} - 2021`,
      },
      {
        title: isEnglishSelected ? "seller" : "vendeur",
        location: "ploërmel - weldom",
        text: [
          isEnglishSelected
            ? "Learned about stock management and orders with a qualified seller"
            : "Appris à gérer le stock et les commandes avec un vendeur qualifié",
          isEnglishSelected
            ? "Ticketed, arranged and displayed merchandise to promote sales"
            : "Étiqueté, arrangé et affiché les marchandises pour promouvoir les ventes",
        ],
        date: `2 ${isEnglishSelected ? "months" : "mois"} - 2020`,
      },
      {
        title: isEnglishSelected ? "seller" : "vendeur",
        location: "ploërmel - JouéClub",
        text: [
          isEnglishSelected
            ? "Improved my customer service and communication skills"
            : "Développé mon service client et ma communication",
          isEnglishSelected
            ? "Was in charge of welcoming customers"
            : "Était en charge de la bienvenue des clients",
          isEnglishSelected
            ? "Learnt about items shelving, labelling products."
            : "Appris à ranger les articles, les étiqueter",
        ],
        date: `2 ${isEnglishSelected ? "months" : "mois"} - 2019`,
      },
    ],
  },
];

export default timelinesData;

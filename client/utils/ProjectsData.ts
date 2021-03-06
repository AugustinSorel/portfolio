import { Categories, ProjectData, Technologies } from "../types/ProjectsData";

const projectsData = (isEnglishSelected: boolean): ProjectData[] => [
  {
    id: "portfolio",
    title: "Portfolio",
    technologies: [
      Technologies.next,
      Technologies.nodejs,
      Technologies.express,
      Technologies.typescript,
    ],
    category: Categories.Frontend,
    description: isEnglishSelected
      ? "Portfolio website built with the mern stack, typescript, nextjs and framer motion. " +
        "This website showcase my projects and skills. As well as being able to contact me and see my resume."
      : "Site de portfolio fait avec le stack mern, typescript, nextjs et framer motion. " +
        "Ce site montre mes projets et mes compétences. Ainsi que pouvoir me contacter et voir mon CV.",
    allTechnologies: [
      Technologies.react,
      Technologies.next,
      Technologies.nodejs,
      Technologies.express,
      Technologies.framerMotion,
      Technologies.styledComponents,
      Technologies.zustand,
      Technologies.typescript,
      Technologies.nodemailer,
    ].sort((a, b) => a.length - b.length),
    links: {
      live: "https://augustin-sorel.com/",
    },
    date: "15.06.2022",
    whatIHaveLearned: [
      isEnglishSelected
        ? "next js with static site generation"
        : "next js avec la génération de sites statiques",
      isEnglishSelected ? "responsive design" : "design responsif",
      isEnglishSelected
        ? "sending emails with nodemailer"
        : "envoi d'emails avec nodemailer",
    ],
  },

  {
    id: "instagram-clone",
    title: "instagram clone",
    technologies: [
      Technologies.react,
      Technologies.nodejs,
      Technologies.express,
      Technologies.mongodb,
      Technologies.typescript,
    ],
    category: Categories.Fullstack,
    description: isEnglishSelected
      ? "An instagram clone build with the mern stack and typescript. " +
        "Users can sign up and upload pictures. As well as being able to browse through other users content and leave comments and likes. " +
        "The backend project is hosted on heroku and the frontend on Netlify."
      : "Un clone d'instagram fait avec le stack mern et typescript." +
        "Les utilisateurs peuvent s'inscrire et uploader des photos. " +
        "Ainsi qu'être capable de parcourir les contenus d'autres utilisateurs et de laisser des commentaires et des likes. " +
        "Le projet backend est hébergé sur heroku et ke frontend sur Netlify.",
    allTechnologies: [
      Technologies.react,
      Technologies.nodejs,
      Technologies.express,
      Technologies.mongodb,
      Technologies.typescript,
      Technologies.framerMotion,
      Technologies.styledComponents,
      Technologies.zustand,
      Technologies.jwt,
      Technologies.zod,
      Technologies.multer,
      Technologies.reactQuery,
    ].sort((a, b) => a.length - b.length),
    links: {
      github: "https://github.com/AugustinSorel/instagram-imitation",
      live: "https://instagram-imitation.herokuapp.com/",
      youtube: "https://www.youtube.com/watch?v=UG7HS1lDw5w",
    },
    date: "08.05.2022",
    images: [
      "https://raw.githubusercontent.com/AugustinSorel/instagram-imitation/master/images/homePage.jpeg",
      "https://raw.githubusercontent.com/AugustinSorel/instagram-imitation/master/images/addNewPost.jpeg",
      "https://raw.githubusercontent.com/AugustinSorel/instagram-imitation/master/images/explorePage.jpeg",
      "https://raw.githubusercontent.com/AugustinSorel/instagram-imitation/master/images/postsLiked.jpeg",
      "https://raw.githubusercontent.com/AugustinSorel/instagram-imitation/master/images/profilePage.jpeg",
      "https://raw.githubusercontent.com/AugustinSorel/instagram-imitation/master/images/loginPage.jpeg",
      "https://raw.githubusercontent.com/AugustinSorel/instagram-imitation/master/images/signUpPage.jpeg",
      "https://raw.githubusercontent.com/AugustinSorel/instagram-imitation/master/images/profileModal.jpeg",
    ],
    whatIHaveLearned: [
      isEnglishSelected
        ? "store images with cloudinary"
        : "stocker des images avec cloudinary",
      isEnglishSelected
        ? "multer for file uploads"
        : "multer pour les uploads de fichiers",
      isEnglishSelected
        ? "advenced jwt authentication"
        : "authentification jwt avancée",
      isEnglishSelected
        ? "refresh and access tokens"
        : "tokens de rafraichissement et d'accès",
      isEnglishSelected
        ? "restrict access to routes"
        : "restreindre l'accès aux routes",
      isEnglishSelected
        ? "use of zod for validation"
        : "utilisation de zod pour la validation",
      isEnglishSelected
        ? "use of react query for data fetching and mutations"
        : "utilisation de react query pour le fetching et les mutations de données",
      isEnglishSelected
        ? "use of zustand for state management"
        : "utilisation de zustand pour le management de state",
      isEnglishSelected ? "mongoose reference" : "référence mongoose",
      isEnglishSelected
        ? "animations with framer motion"
        : "animations avec framer motion",
      isEnglishSelected
        ? "styled components for styling"
        : "utilisation de styled components pour le styling",
    ],
  },

  {
    id: "multiplayer-tic-tac-toe",
    title: isEnglishSelected
      ? "multiplayer tic-tac-toe"
      : "morpion multijoueur",
    technologies: [
      Technologies.react,
      Technologies.express,
      Technologies.socketio,
      Technologies.typescript,
    ],
    category: Categories.Fullstack,
    description: isEnglishSelected
      ? "A multiplayer tic-tac-toe game built with the mern stack, typescript and socket io. " +
        "Users are first required to enter their room code to join a game. " +
        "The user can then play against another user with the same room code. " +
        "The backend project is hosted on heroku and the frontend on Netlify."
      : "Un jeu de tic-tac-toe multijoueur fait avec le stack mern, typescript et socket io. " +
        "Les utilisateurs doivent d'abord entrer un code pour rejoindre une partie. " +
        "L'utilisateur peut ensuite jouer contre un autre utilisateur avec le même code. " +
        "Le projet backend est hébergé sur heroku et ke frontend sur Netlify.",
    allTechnologies: [
      Technologies.react,
      Technologies.nodejs,
      Technologies.express,
      Technologies.socketio,
      Technologies.typescript,
      Technologies.zustand,
      Technologies.reactQuery,
      Technologies.framerMotion,
      Technologies.styledComponents,
    ].sort((a, b) => a.length - b.length),
    links: {
      github: "https://github.com/AugustinSorel/mutiplayer-tic-tac-toe",
      live: "https://multiplayer-tic-tac-toe-typescript.netlify.app/",
      youtube: "https://www.youtube.com/watch?v=pUSwFlEO0tE",
    },
    date: "05.04.2022",
    images: [
      "https://raw.githubusercontent.com/AugustinSorel/mutiplayer-tic-tac-toe/master/images/gamePage.jpeg",
      "https://raw.githubusercontent.com/AugustinSorel/mutiplayer-tic-tac-toe/master/images/homePage.jpeg",
      "https://raw.githubusercontent.com/AugustinSorel/mutiplayer-tic-tac-toe/master/images/waitingPage.jpeg",
    ],
    whatIHaveLearned: [
      isEnglishSelected
        ? "use of socket io for communication"
        : "utilisation de socket io pour la communication",
      isEnglishSelected ? "typescript" : "typescript",
      isEnglishSelected
        ? "zustand for state management"
        : "utilisation de zustand pour le management de state",
      isEnglishSelected
        ? "framer motion for animations"
        : "utilisation de framer motion pour les animations",
    ],
  },

  {
    id: "gym-logger",
    title: isEnglishSelected ? "gym logger" : "journal de sport",
    technologies: [
      Technologies.wpa,
      Technologies.react,
      Technologies.nodejs,
      Technologies.express,
      Technologies.mongodb,
    ],
    category: Categories.Fullstack,
    description: isEnglishSelected
      ? "A PWA web app made with the mern stack and javascript. " +
        "Users can sign up and start entering their gym progress. " +
        "An algorithm will calculate their best perfomance and store them in the database. " +
        "The user will be able to see his progress on a graph and sorted by categories. " +
        "The backend project is hosted on heroku and the frontend on Netlify."
      : "Une application web PWA fait avec le stack mern et javascript. " +
        "Les utilisateurs peuvent s'inscrire et commencer à entrer leur progrès dans leur gym. " +
        "Un algorithme va calculer leur meilleur résultat et les enregistrer dans la base de données. " +
        "L'utilisateur pourra voir son progrès sur un graphique et trié par catégories. " +
        "Le projet backend est hébergé sur heroku et ke frontend sur Netlify.",

    allTechnologies: [
      Technologies.react,
      Technologies.nodejs,
      Technologies.express,
      Technologies.zustand,
      Technologies.reactQuery,
      Technologies.jwt,
      Technologies.recharts,
      Technologies.wpa,
      Technologies.styledComponents,
      Technologies.framerMotion,
    ].sort((a, b) => a.length - b.length),
    links: {
      github: "https://github.com/AugustinSorel/gym-logger",
      live: "https://gym-logger.netlify.app/welcome",
      youtube: "https://www.youtube.com/watch?v=ABEkooGSEXc&t=4s",
    },
    date: "26.01.2022",
    images: [
      "https://raw.githubusercontent.com/AugustinSorel/gym-logger/master/Images/HomePage.png",
      "https://raw.githubusercontent.com/AugustinSorel/gym-logger/master/Images/ListOfExercises.png",
      "https://raw.githubusercontent.com/AugustinSorel/gym-logger/master/Images/AddValuePage.png",
      "https://raw.githubusercontent.com/AugustinSorel/gym-logger/master/Images/AccountPage.png",
      "https://raw.githubusercontent.com/AugustinSorel/gym-logger/master/Images/LoginPage.png",
      "https://raw.githubusercontent.com/AugustinSorel/gym-logger/master/Images/SignUpPage.png",
      "https://raw.githubusercontent.com/AugustinSorel/gym-logger/master/Images/MobileHomePage.png",
      "https://raw.githubusercontent.com/AugustinSorel/gym-logger/master/Images/MobileAddValuePage.png",
    ],
    whatIHaveLearned: [
      isEnglishSelected
        ? 'use of "wpa" for mobile support'
        : 'utilisation de "wpa" pour le support mobile',
      isEnglishSelected ? "use of react query" : "utilisation de react query",
      isEnglishSelected
        ? "basic use of jwt authentication"
        : "utilisation basic de l'authentification jwt",
      isEnglishSelected
        ? "use of recharts for drawing graphs"
        : "utilisation de recharts pour dessiner des graphiques",
      isEnglishSelected
        ? "use of framer motion for animations"
        : "utilisation de framer motion pour les animations",
      isEnglishSelected
        ? "use of styled components"
        : "utilisation de styled components",
      isEnglishSelected
        ? "react query for fetching data and mutation"
        : "react query pour récupérer les données et la mutation",
    ],
  },

  {
    id: "dfs-visualizer",
    title: isEnglishSelected ? "DFS visualizer" : "visualiseur DFS",
    technologies: [Technologies.csharp, Technologies.wpf, Technologies.xaml],
    category: Categories.Simulation,
    description: isEnglishSelected
      ? "Random maze generator and solver made in c# with Wpf. Depth First Search algorithm " +
        "can be used to for both making and finding the shortest path to solve a random maze. " +
        "User can select the maze size with the speed of the algorithm. " +
        "The maze can be saved and loaded from a file. " +
        "The shortest path solved can also be saved to a file. "
      : "Générateur de labyrinthe aléatoire et de solveur fait en c# avec Wpf. L'algorithme DFS peut être utilisé pour créer et trouver le chemin le plus court pour résoudre un labyrinthe aléatoire. " +
        "L'utilisateur peut sélectionner la taille du labyrinthe avec la vitesse de l'algorithme. " +
        "Le labyrinthe peut être enregistré et chargé depuis un fichier. " +
        "Le chemin le plus court résolu peut également être enregistré dans un fichier. ",

    allTechnologies: [
      Technologies.csharp,
      Technologies.wpf,
      Technologies.xaml,
    ].sort((a, b) => a.length - b.length),
    links: {
      github: "https://github.com/AugustinSorel/DfsVisualization",
      youtube: "https://www.youtube.com/watch?v=yaT4j0oeoiw",
    },
    date: "27.10.2021",
    images: [
      "https://raw.githubusercontent.com/AugustinSorel/DfsVisualization/master/Images/start.png",
      "https://raw.githubusercontent.com/AugustinSorel/DfsVisualization/master/Images/end.png",
      "https://raw.githubusercontent.com/AugustinSorel/DfsVisualization/master/Images/starttwo.png",
      "https://raw.githubusercontent.com/AugustinSorel/DfsVisualization/master/Images/endtwo.png",
    ],
    whatIHaveLearned: [
      isEnglishSelected
        ? "the dfs algorithm and how to use it for solving and generating a maze"
        : "l'algorithme dfs et comment l'utiliser pour résoudre et générer un labyrinthe",
      isEnglishSelected
        ? "the use of wpf for the visualisation"
        : "l'utilisation de wpf pour la visualisation",
      isEnglishSelected
        ? "the use of xaml for styling"
        : "l'utilisation de xaml pour le style",
    ],
  },

  {
    id: "sorting-algorithms-visualizer",
    title: isEnglishSelected
      ? "Sorting Algorithm Visualizer"
      : "Visualiseur de tri par algorithme",
    technologies: [Technologies.csharp, Technologies.wpf, Technologies.xaml],
    category: Categories.Simulation,
    description: isEnglishSelected
      ? "WPF algorithms visualizer(bubble sort, insertion sort, quick sort, merge sort and radix sort)" +
        "The user can select the algorithm, array size and the speed of the algorithm. " +
        "The program will run the algorithm and display the steps of the algorithm. "
      : "Visualiseur d'algorithme WPF (bubble sort, insertion sort, quick sort, merge sort et radix sort). " +
        "L'utilisateur peut sélectionner l'algorithme, la taille de tableau et la vitesse de l'algorithme. " +
        "Le programme va exécuter l'algorithme et afficher les étapes de l'algorithme. ",

    allTechnologies: [
      Technologies.csharp,
      Technologies.wpf,
      Technologies.xaml,
    ].sort((a, b) => a.length - b.length),
    links: {
      github: "https://github.com/AugustinSorel/SortingAlgorithmVisualizer",
      youtube: "https://www.youtube.com/watch?v=CuGiLVoadqc",
    },
    date: "02.05.2021",
    images: [
      "https://raw.githubusercontent.com/AugustinSorel/SortingAlgorithmVisualizer/master/Images/BubbleSort.PNG",
      "https://github.com/AugustinSorel/SortingAlgorithmVisualizer/blob/master/Images/InsertionSort.PNG?raw=true",
      "https://raw.githubusercontent.com/AugustinSorel/SortingAlgorithmVisualizer/master/Images/QuickSort.PNG",
      "https://raw.githubusercontent.com/AugustinSorel/SortingAlgorithmVisualizer/master/Images/RadixSort.PNG",
    ],
    whatIHaveLearned: [
      isEnglishSelected ? "bubble sort algorithm" : "algorithme bubble sort",
      isEnglishSelected
        ? "insertion sort algorithm"
        : "algorithme insertion sort",
      isEnglishSelected ? "quick sort algorithm" : "algorithme quick sort",
      isEnglishSelected ? "radix sort algorithm" : "algorithme radix sort",
      isEnglishSelected ? "merge sort algorithm" : "algorithme merge sort",
    ],
  },

  {
    id: "double-pendulum-simulator",
    title: isEnglishSelected
      ? "Double Pendulum Simulation"
      : "Simulation d'un double pendule",
    technologies: [Technologies.csharp, Technologies.wpf, Technologies.xaml],
    category: Categories.Simulation,
    description: isEnglishSelected
      ? "A simulation of a double pendulum made with c#. " +
        "The user can select the length and the mass of each blob, the gravity, and the speed of the simulation. " +
        "The simulation will show the velocity of each blob. "
      : "Une simulation de double pendule fait avec c#. " +
        "L'utilisateur peut sélectionner la longueur et la masse de chaque pendules, la gravité et la vitesse de la simulation. " +
        "La simulation montrera la vitesse de chaque pendules. ",
    allTechnologies: [
      Technologies.csharp,
      Technologies.wpf,
      Technologies.xaml,
    ].sort((a, b) => a.length - b.length),
    links: {
      github: "https://github.com/AugustinSorel/DoublePendulum",
      youtube: "https://www.youtube.com/watch?v=K_Rlfm4sDlg",
    },
    date: "01.04.2021",
    images: [
      "https://github.com/AugustinSorel/DoublePendulum/blob/master/TestingImages/Capture%20d%E2%80%99%C3%A9cran%202021-04-01%20213444.png?raw=true",
      "https://github.com/AugustinSorel/DoublePendulum/blob/master/TestingImages/Capture%20d%E2%80%99%C3%A9cran%202021-04-01%20213512.png?raw=true",
      "https://github.com/AugustinSorel/DoublePendulum/blob/master/TestingImages/Capture%20d%E2%80%99%C3%A9cran%202021-04-01%20213240.png?raw=true",
    ],
    whatIHaveLearned: [
      isEnglishSelected
        ? "simulation of a double pendulum"
        : "simulation d'un double pendule",
      isEnglishSelected
        ? "dymanic animation with wpf and c#"
        : "animation dynamique avec wpf et c#",
      isEnglishSelected ? "xaml for styling" : "xaml pour le style",
    ],
  },
];

export default projectsData;

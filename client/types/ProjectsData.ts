export enum Categories {
  Fullstack = "fullstack",
  Frontend = "frontend",
  Simulation = "simulation",
}

export enum Technologies {
  react = "react",
  nodejs = "nodejs",
  express = "express",
  mongodb = "mongodb",
  typescript = "typescript",
  zustand = "zustand",
  framerMotion = "framer motion",
  styledComponents = "styled-components",
  csharp = "C#",
  wpf = "WPF",
  socketio = "socket.io",
  jwt = "JWT",
  zod = "ZOD",
  multer = "multer",
  reactQuery = "react-query",
  recharts = "recharts",
  xaml = "XAML",
  wpa = "WPA",
  vercel = "vercel",
  netlify = "netlify",
  heroku = "heroku",
  next = "next",
}

export type Links = {
  github?: string;
  live?: string;
  youtube?: string;
};

export type ProjectData = {
  id: string;
  title: string;
  technologies: Technologies[];
  category: Categories;
  description: string;
  allTechnologies: Technologies[];
  links: Links;
  date: string;
  images?: string[];
};

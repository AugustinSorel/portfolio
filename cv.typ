#import "@preview/basic-resume:0.2.8": *

#let name = "Augustin Sorel"
#let location = "Paris"
#let email = "sorelaugustin@gmail.com"
#let github = "github.com/augustinsorel"
#let phone = "06 03 35 46 98"

#show: resume.with(
  phone: phone,
  author: name,
  location: location,
  email: email,
  github: github,
  font: "New Computer Modern",
  paper: "us-letter",
  personal-info-position: center,
  author-position: center,
)

== Work Experience

#work(
  title: "Fullstack Engineer",
  location: "Maidenhead - UK",
  company: "SquaredUp",
  dates: dates-helper(start-date: "Sep 2023", end-date: "Sep 2024"),
)
- Architected and deployed a cloud-native asset upload pipeline using AWS S3, Lambda, and CloudFront,
  enabling secure, scalable file delivery for high-volume customer workflows achieving >99.9% uptime for high-volume customer workflows.
- Implemented encryption and decryption mechanisms for sensitive API key storage in DynamoDB,
  following industry best practices, enhancing data security, ensuring GDPR compliance and reducing security risk for sensitive data storage.
- Redesigned the customer homepage using a modern ReactJS Bento grid architecture,
  optimizing layout responsiveness and interactivity across multiple devices, resulting in a smoother user experience.
- Developed modular, reusable React/TypeScript components with comprehensive unit tests and strong code documentation,
  increasing maintainability, accelerating feature delivery, and improving team collaboration.

#work(
  title: "Front End Developer",
  location: "Paris - FR",
  company: "Tarmac Technologies",
  dates: dates-helper(start-date: "Jun 2022", end-date: "Oct 2022"),
)
- Performed software maintenance and delivered new features for two major codebases
  designed to be used by airline companies and airports ground workers
- Partnered with back-end developers and created a dynamic dashboard with live data using
  Typescript and React, resulting in website leads increase by 15%.
- Followed a strict TDD method to deliver code with a test coverage of almost 100%.
- Worked in accordance with Agile, attending daily Scrums and working in weekly sprints.

== Projects

#project(
  dates: dates-helper(start-date: "Dec 2023", end-date: "Feb 2024"),
  name: "SerendipJs",
  url: "github.com/AugustinSorel/SerendipJS",
)
- A fully working front end framework written from scratch with full TypeScript support.
- Diffing and patching Algorithm written from scratch for minimal rerenders.
- Virtual dom tree with 4 nodes (portal, element, string and fragment)

#project(
  dates: dates-helper(start-date: "Jun 2023", end-date: "Aug 2023"),
  name: "TypeScript Interpreter",
  url: "github.com/AugustinSorel/ts-interpreter",
)
- Fully programming language made from scratch with TypeScript.
- Developed a custom parser and lexer to efficiently interpret and execute user-defined code.
- It supports OOP, classes, inheritance, user-defined functions, built in functions, variable
  assignments and loops

== Education

#edu(
  institution: "Leicester University",
  location: "Leicester, UK",
  dates: dates-helper(start-date: "Sep 2021", end-date: "Jun 2025"),
  degree: "Bachelor of Software Engineering",
)
- Awards: Best first year undergraduate with an overall grade of 90%.
- Achieved:
  Discrete Mathematics (95%),
  Functional Programming (98%),
  Computer Architecture(96%),
  Algorithms, Data Structures and Advanced Programming (87%),
  Cloud Computing (85%),
  Object Oriented Programming (99%).

#edu(
  institution: "Peter Symonds College",
  location: "Winchester, UK",
  dates: dates-helper(start-date: "Sep 2019", end-date: "Jun 2021"),
  degree: "A Level - Math, Computer Science, French",
)
- Achieved: A\*, A\*. A in those classes respectively.


== Skills

TypeScript, JavaScript, ReactJs, NextJs, HTML, CSS, SASS, Bash, Linux, Docker, AWS, Postgresql,
SQL, Tailwind CSS, Radix, React Query, Zod, Visx, TRPC, Drizzle, NodeJs, Bun

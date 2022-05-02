// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sahibpreet",
  middleName: "",
  lastName: "Singh",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/sahibpreet82000",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/sahib.preet.singh/",
    },
    {
      image: "fa-linkedin",
      url: "www.linkedin.com/in/sahib-preet-singh-605833205",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/sahib.preet.3456",
    },
  ],
};

// ABOUT SECTION

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/pfp.jpg"),
  imageSize: 309,
  message:
    "My name is Sahibpreet Singh. I’m pursuing Computer Science Engineering from Chandigarh Engineering College,Landran(Pb). I'm passionate towards learing new technologies, and my goal is to pursue this passion within the field of software engineering. In my free time, I like to explore open source projects.",
  resume:
    "https://docs.google.com/document/d/1oD9f4TKstGwO5No8UCmq_ySgYXcb4I3a/edit?usp=sharing&ouid=112900004832349102035&rtpof=true&sd=true",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "sahibpreet82000",
  reposLength: 1,
  specificRepos: [
    "Ecom-express",
    "TODO-APP",
    "Ecom-Express-Backend",
    "Java_practice_programs",
    "sahibpreet82000",
  ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/pfp.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/pfp.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "SQL", value: 75 },
    { name: "JavaScript", value: 92 },
    { name: "Node.js", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "Java", value: 90 },
    { name: "HTML/CSS", value: 95 },
    { name: "C/C++", value: 65 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 92 },
    { name: "Positivity", value: 85 },
    { name: "Adaptability", value: 95 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering Opportunity! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "sahibpreet82000@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: "Software Engineer", // Here Add Company Name
      date: "June 2018 – Present",
    },
    {
      role: "Front-End Developer",
      date: "May 2017 – May 2018",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};

export const navItems = [
  {name: "About", link: "#about" },
  {name: "Projects", link: "#projects" },
  {name: "Resume", link: "#resume" },
];

export const socialMedia = [
  {
    id: "1",
    name: "GitHub",
    img: "/github.svg",
    url: "https://github.com/bryant-lam",
  },
  {
    id: "2",
    name: "LinkedIn",
    img: "/linkedin.svg",
    url: "https://www.linkedin.com/in/bryant-lam1/",
  },
  {
    id: "3",
    name: "Email",
    img: "/mail.svg",
    url: "mailto:bryant124588@gmail.com",
  },
];

export const gridItems = [
  {
    id: 1,
    title: "Next in line to Learn",
    description: "",
    className: "",
    headerClassName: "justify-center",
    descriptionClassName: "hidden",
    titleClassName: "text-center max-w-full",
  },
  {
    id: 2,
    title: "My tech stack",
    description: "Delivering solutions with",
    className: "bg-black-100",
    headerClassName: "justify-center",
    descriptionClassName: "max-w-fit",
    titleClassName: "max-w-fit",
  },
  {
    id: 3,
    title: "Let's Work Together",
    description: "",
    className: "",
    headerClassName: "justify-center",
    descriptionClassName: "hidden",
    titleClassName: "flex justify-center max-w-full text-white",
  },
];

export const projects = [
  {
    id: 1,
    title: "Personal Website",
    description: "A modern portfolio to showcase my projects and skills. A fully responsive website across all devices.",
    img: "/portfolio_proj.jpg",
    buttonText: "Check Live Site",
    iconLists: ["/ts.svg", "/re.svg", "/next-light.svg", "/tail.svg", "/fm.svg"],
    link: "#about",
  },
  {
    id: 2,
    title: "Finanseer",
    description: "A web application for users to track and predict their finances. Displaying a wide array of stats on revenue, expenses, and profits.",
    img: "/finanseer_proj.jpg",
    buttonText: "Check Live Site",
    iconLists: ["/ts.svg", "/re.svg", "/vite.svg", "/dock.svg", "/mongodb.svg"],
    link: "https://finance-app-bryant-lams-projects.vercel.app",
  },
  {
    id: 3,
    title: "Schedulog",
    description: "A mobile app for users to manage their schedules and meetups. Rapidly identify conflicts within your schedules and plan accordingly with others.",
    img: "/schedulog_proj.jpg",
    buttonText: "View on GitHub",
    iconLists: ["/kotlin.svg", "/figma.svg", "/firebase.svg"],
    link: "https://github.com/bryant-lam/Schedulog",
  },
];

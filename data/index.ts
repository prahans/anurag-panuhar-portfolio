export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I build modern full-stack web apps.",
    description: "Full-Stack Development",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[min(60vh,34rem)]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },

  {
    id: 2,
    title: "Based in Kathmandu, Nepal.",
    description: "Open to opportunities",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },

  {
    id: 3,
    title: "My tech stack",
    description: "Always improving",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },

  {
    id: 4,
    title: "I enjoy backend development.",
    description: "What I Like",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Building better full-stack apps.",
    description: "Currently Learning",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },

  {
    id: 6,
    title: "Let's connect.",
    description: "Get in touch",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "WanderLust",
    des: "A full-stack vacation rental platform where users can explore listings, view property details, create and manage accommodations, and securely authenticate.",
    img: "/wanderLust.png",
    iconLists: ["/js.svg", "/bootstrap.svg", "/node.svg"],

    link: "https://wanderlust-okyq.onrender.com/listings",

    github: "https://github.com/prahans/wanderLust",
  },
  {
    id: 2,
    title: "The-wild-oasis-website",
    des: "Full-stack luxury cabin reservation website built with Next.js, TypeScript, Supabase, and Google OAuth. Browse cabins, make reservations, and manage bookings through a protected guest account.",
    img: "/theWildOasisWebsite.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://the-wild-oasis-website-zeta-puce.vercel.app/",
    github: "https://github.com/prahans/The-wild-oasis-website",
  },
  {
    id: 3,
    title: "worldWise",
    des: "A travel companion app built with React that lets users explore cities, save visited places, and manage travel experiences using an interactive map.",
    img: "/worldWise.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg"],
    link: "https://world-wise-prahans1.vercel.app/",
    github: "https://github.com/prahans/worldWise",
  },
  {
    id: 4,
    title: "full-stack-stock-trading-platform",
    des: "A full-stack stock trading platform inspired by Zerodha where users can manage their portfolio, track holdings and positions, and securely access a personalized trading dashboard.",
    img: "/zerodha.png",
    iconLists: ["/re.svg", "/bootstrap.svg", "/ts.svg"],
    link: "https://full-stack-stock-trading-platform-f.vercel.app/",
    github: "https://github.com/prahans/full-stack-stock-trading-platform",
  },
  {
    id: 5,
    title: "FAST-REACT-PIZZA",
    des: "A full-featured pizza ordering application built with React, Redux Toolkit, React Router, and Tailwind CSS.",
    img: "/fastPizza.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg"],
    link: "https://fast-react-pizza-x5su.vercel.app/",
    github: "https://github.com/prahans/FAST-REACT-PIZZA",
  },
  {
    id: 6,
    title: "The-wild-oasis",
    des: "A modern cabin booking management application built with React, Supabase, and Styled Components, featuring authentication, cabin management, reservations, and an admin dashboard.",
    img: "/the-wild-oasis.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg"],
    link: "https://the-wild-oasis-prahans.netlify.app/",
    github: "https://github.com/prahans/The-wild-oasis",
  },
];

export const testimonials = [
  {
    quote:
      "I build complete web applications from responsive frontend interfaces to backend APIs, authentication, databases, and deployment.",
    name: "Full-Stack Development",
    title: "React • TypeScript • Node.js • Express",
  },
  {
    quote:
      "I enjoy working on backend systems, designing REST APIs, handling authentication, and connecting applications to databases.",
    name: "Backend Development",
    title: "Node.js • Express • MongoDB • PostgreSQL",
  },
  {
    quote:
      "I focus on writing maintainable code, organizing projects clearly, and continuously improving the architecture of the applications I build.",
    name: "Clean & Maintainable Code",
    title: "Git • GitHub • TypeScript",
  },
  {
    quote:
      "I have experience deploying frontend and full-stack applications and troubleshooting issues that appear in production environments.",
    name: "Deployment",
    title: "Vercel • Render • Netlify",
  },
  {
    quote:
      "I learn by building real projects, improving existing applications, reading documentation, and exploring better development practices.",
    name: "Continuous Learning",
    title: "Build • Learn • Improve",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

// List tech stack
const techStack = [
  { icon: "devicon-html5-plain colored", name: "HTML" },
  { icon: "devicon-css3-plain colored", name: "CSS" },
  { icon: "devicon-javascript-plain colored", name: "JavaScript" },
  { icon: "devicon-bootstrap-plain colored", name: "Bootstrap" },
  { icon: "devicon-tailwindcss-plain colored", name: "Tailwind" },
  { icon: "devicon-react-original colored", name: "React" },
  { icon: "devicon-nodejs-plain colored", name: "Node.js" },
  { icon: "devicon-github-original", name: "GitHub" },
];

// Ambil container
const container = document.getElementById("tech-stack");

// Generate card HTML
techStack.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <i class="${item.icon}"></i>
    <p>${item.name}</p>
  `;
  container.appendChild(card);
});

console.log(" Tech stack icons loaded via JS");

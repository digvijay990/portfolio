// script.js

// Scroll reveal animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// CSS for reveal effect will be added via JavaScript classes
const style = document.createElement('style');
style.innerHTML = `
  .hidden {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease, transform 1s ease;
  }
  .visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

// Add click listener to Python skill for redirection
const skills = document.querySelectorAll(".skills-list li");
skills.forEach(skill => {
  if (skill.textContent.trim() === "Python") {
    skill.style.cursor = "pointer";
    skill.addEventListener("click", () => {
      window.open("https://github.com/digvijay990/Python-Topics", "_blank");
    });
  }
});

// Add About Section content dynamically
const aboutSection = document.querySelector("#about p");
if (aboutSection) {
  aboutSection.innerHTML = `
    Hi! I'm Digvijay — a curious Computer Science student who loves building projects in ML, Data Analytics, and Full-Stack Web Dev.<br><br>
    I’m currently pursuing a B.Tech in Computer Science. I enjoy working on projects involving machine learning, data visualization, and web development. Proficient in Python, Power BI, and React.js. Curious to explore cloud computing and AI-based solutions.
  `;
}

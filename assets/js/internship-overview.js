document.addEventListener("DOMContentLoaded", () => {
  const practicumObjectives = [
    { icon: "bi-mortarboard", title: "Apply Academic Knowledge", description: "Apply information technology concepts and technical skills in a professional government environment." },
    { icon: "bi-laptop", title: "Gain Industry Experience", description: "Experience real development workflows, collaborative tools, project standards, and workplace practices." },
    { icon: "bi-code-square", title: "Strengthen Technical Skills", description: "Improve software development, interface design, testing, documentation, and multimedia production capabilities." },
    { icon: "bi-person-check", title: "Develop Professional Competencies", description: "Strengthen communication, teamwork, adaptability, time management, and professional responsibility." }
  ];

  const exposureAreas = [
    { icon: "bi-window-stack", title: "Government Information Systems", description: "Development and enhancement of digital platforms supporting local government operations and public service delivery." },
    { icon: "bi-controller", title: "Educational Technology", description: "Creation of visual assets and interfaces for Grade 5 and Grade 7 interactive learning modules." },
    { icon: "bi-layout-text-window", title: "UI/UX Design", description: "Interface refinement, visual consistency, usability improvement, and responsive layout design." },
    { icon: "bi-clipboard2-check", title: "Testing & Documentation", description: "Feature validation, issue reporting, revision tracking, weekly reports, and organized project documentation." },
    { icon: "bi-megaphone", title: "Public Information Design", description: "Production of visual materials supporting ICTO awareness campaigns and government communication initiatives." }
  ];

  const workTools = ["Visual Studio Code", "GitHub", "Google Drive", "CodeIgniter 4", "MySQL", "Adobe Photoshop", "Godot Engine"];
  const card = item => `<article class="overview-card"><span class="card-icon"><i class="bi ${item.icon}" aria-hidden="true"></i></span><h4>${item.title}</h4><p>${item.description}</p></article>`;

  document.querySelector("#objectives-grid").innerHTML = practicumObjectives.map(card).join("");
  document.querySelector("#exposure-grid").innerHTML = exposureAreas.map(card).join("");
  document.querySelector("#tools-list").innerHTML = workTools.map(tool => `<span>${tool}</span>`).join("");
});

document.addEventListener("DOMContentLoaded", () => {
  const lessons = [
    { icon: "bi-code-slash", title: "Technical Growth", description: "Strengthened practical experience in software development, database-driven systems, UI implementation, debugging, testing, and collaborative development through real government projects." },
    { icon: "bi-palette", title: "Creative Development", description: "Improved visual communication by designing educational game interfaces, digital illustrations, multimedia assets, and user-focused layouts that balanced function and visual appeal." },
    { icon: "bi-briefcase", title: "Professional Experience", description: "Learned workplace communication, project coordination, documentation practices, version control, task organization, and the importance of delivering reliable work on schedule." },
    { icon: "bi-lightbulb", title: "Continuous Learning", description: "Adapted to new tools, accepted constructive feedback, revised outputs, and continuously improved both technical and creative work throughout the internship." }
  ];

  const skillGroups = [
    { icon: "bi-code-square", title: "Software Development", skills: ["PHP", "CodeIgniter 4", "MySQL", "MVC Architecture", "Bootstrap", "QR Verification", "Validation Logic", "System Testing", "Debugging", "Database Support"] },
    { icon: "bi-window", title: "UI/UX Design", skills: ["Interface Design", "Responsive Layouts", "Visual Hierarchy", "Usability", "User Experience", "Component Consistency", "Form Design"] },
    { icon: "bi-brush", title: "Creative Production", skills: ["Adobe Photoshop", "Digital Illustration", "Graphic Asset Creation", "Educational Game Design", "Multimedia Production", "Layout Composition", "Visual Communication"] },
    { icon: "bi-people", title: "Professional Skills", skills: ["Team Collaboration", "Documentation", "Time Management", "Problem Solving", "Communication", "Adaptability", "Feedback Management", "Project Organization"] }
  ];

  const impacts = [
    { icon: "bi-building", title: "Government Systems", description: "Contributed to government information system improvements that supported beneficiary records, QR-based verification, and more organized assistance distribution workflows." },
    { icon: "bi-controller", title: "Educational Innovation", description: "Created visual and interface assets that supported interactive Grade 5 and Grade 7 English learning modules." },
    { icon: "bi-megaphone", title: "Public Communication", description: "Produced campaign and visual materials that supported data privacy awareness and other ICTO public information initiatives." }
  ];

  const experiences = [
    { icon: "bi-people", title: "Collaborating with Developers", description: "Learned how software teams coordinate tasks, review changes, manage project updates, and work toward shared development goals." },
    { icon: "bi-chat-square-text", title: "Receiving and Applying Feedback", description: "Improved creative and technical outputs through supervisor reviews, revision requests, testing observations, and iterative refinement." },
    { icon: "bi-person-workspace", title: "Participating in Client Discussions", description: "Observed how user needs and existing manual processes are translated into system requirements and workflow improvements." },
    { icon: "bi-bug", title: "Testing Real Software", description: "Gained practical experience identifying interface issues, validating system behavior, confirming fixes, and preparing features for turnover." },
    { icon: "bi-buildings", title: "Supporting Government Projects", description: "Applied technical and creative skills to projects designed to support public service, education, and data privacy awareness." }
  ];

  const future = [
    { icon: "bi-bullseye", title: "Career Goal", description: "Continue building software solutions that combine reliable functionality, thoughtful design, and positive user experiences." },
    { icon: "bi-mortarboard", title: "Future Learning", description: "Expand my knowledge in full-stack development, cloud technologies, modern web frameworks, deployment practices, and scalable system design." },
    { icon: "bi-graph-up-arrow", title: "Long-Term Vision", description: "Contribute to meaningful digital solutions that improve services, support communities, and respond to real user needs." }
  ];

  const actions = [
    { href: "internship-overview.html", icon: "bi-arrow-left", label: "Back to Overview", style: "primary" },
    { href: "major-projects.html", icon: "bi-grid", label: "View Major Projects", style: "secondary" }
  ];

  const card = ({ icon, title, description }) => `
    <article class="takeaway-card">
      <span class="card-icon"><i class="bi ${icon}" aria-hidden="true"></i></span>
      <h4>${title}</h4>
      <p>${description}</p>
    </article>`;

  document.querySelector("#lesson-grid").innerHTML = lessons.map(card).join("");
  document.querySelector("#impact-grid").innerHTML = impacts.map(card).join("");
  document.querySelector("#future-grid").innerHTML = future.map(card).join("");
  document.querySelector("#skills-grid").innerHTML = skillGroups.map(group => `
    <article class="skill-card">
      <div class="skill-heading"><span class="card-icon"><i class="bi ${group.icon}" aria-hidden="true"></i></span><h4>${group.title}</h4></div>
      <div class="skill-chips" aria-label="${group.title} skills">${group.skills.map(skill => `<span>${skill}</span>`).join("")}</div>
    </article>`).join("");
  document.querySelector("#experience-list").innerHTML = experiences.map((item, index) => `
    <article class="experience-item">
      <span class="experience-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="card-icon"><i class="bi ${item.icon}" aria-hidden="true"></i></span>
      <div><h4>${item.title}</h4><p>${item.description}</p></div>
    </article>`).join("");
  document.querySelector("#takeaways-actions").innerHTML = actions.map(action => `
    <a href="${action.href}" class="takeaways-btn ${action.style}"><i class="bi ${action.icon}" aria-hidden="true"></i>${action.label}</a>`).join("");
});

document.addEventListener("DOMContentLoaded", () => {
  const contributionSnapshot = [
    { icon: "bi-briefcase", label: "Role", value: "Software Development & Creative Support Intern" },
    { icon: "bi-code-square", label: "Primary Focus", value: "Government Web Application Development" },
    { icon: "bi-palette", label: "Secondary Focus", value: "UI/UX Design & Multimedia Production" },
    { icon: "bi-people", label: "Team Environment", value: "Cross-functional ICT Team" },
    { icon: "bi-grid", label: "Work Areas", value: "Development • Testing • Creative Design • Documentation" },
    { icon: "bi-diagram-3", label: "Project Scope", value: "Government Systems • Educational Technology • Public Information" }
  ];

  const contributionAreas = [
    { icon: "bi-code-slash", title: "Software Development", description: "Contributed to the development and enhancement of government information systems by implementing new features, refining existing modules, improving interfaces, debugging issues, and supporting reliable web application delivery.", tags: ["CodeIgniter 4", "PHP", "MySQL", "Bootstrap", "MVC"] },
    { icon: "bi-hdd-network", title: "System Deployment & Technical Support", description: "Supported the deployment of the Biñan Access Card Management Information System during actual government assistance distribution by preparing laptops, configuring QR scanners, validating system functionality, and providing on-site technical support.", tags: ["Deployment", "QR Verification", "Hardware Setup", "Technical Support"] },
    { icon: "bi-bug", title: "Testing & Quality Assurance", description: "Performed functional testing, system validation, debugging, issue verification, and readiness checks to improve system reliability, accuracy, usability, and stability before deployment.", tags: ["Functional Testing", "Validation", "Debugging", "Quality Assurance"] },
    { icon: "bi-palette", title: "UI/UX & Graphic Asset Creation", description: "Designed interfaces, digital illustrations, icons, presentation materials, educational game assets, and campaign visuals that supported usability, learning experiences, and public communication.", tags: ["UI Design", "Adobe Photoshop", "Illustration", "Multimedia Assets"] },
    { icon: "bi-people", title: "Team Collaboration", description: "Collaborated with ICTO personnel and fellow interns during planning, development, testing, deployment, reviews, and problem-solving activities while contributing to shared project goals.", tags: ["Communication", "Teamwork", "Planning", "Reviews"] },
    { icon: "bi-journal-text", title: "Documentation & Project Organization", description: "Prepared weekly accomplishment reports, maintained project documentation, organized shared resources, tracked development progress, and supported efficient team coordination.", tags: ["Reports", "Documentation", "Resource Management", "Progress Tracking"] }
  ];

  const toolGroups = [
    { icon: "bi-code-square", title: "Development", items: ["PHP", "CodeIgniter 4", "MySQL", "Bootstrap", "GitHub", "Visual Studio Code", "XAMPP"] },
    { icon: "bi-brush", title: "Creative", items: ["Adobe Photoshop", "Figma", "Godot Engine"] },
    { icon: "bi-kanban", title: "Productivity & Collaboration", items: ["Google Drive", "Microsoft Office", "Shared Project Repositories", "Weekly Progress Reports"] }
  ];

  const workflowSteps = [
    { icon: "bi-clipboard-data", title: "Planning", description: "Participated in project discussions, task reviews, interface planning, and requirement clarification." },
    { icon: "bi-code-slash", title: "Development", description: "Implemented features, refined modules, improved interfaces, and resolved development issues." },
    { icon: "bi-check2-square", title: "Testing", description: "Validated functionality, identified issues, verified revisions, and confirmed feature readiness." },
    { icon: "bi-cloud-arrow-up", title: "Deployment", description: "Prepared equipment, supported live implementation, and assisted users during system operations." },
    { icon: "bi-file-earmark-text", title: "Documentation", description: "Prepared reports, maintained project resources, recorded progress, and organized supporting materials." }
  ];

  const professionalSkillGroups = [
    { icon: "bi-terminal", title: "Technical", items: ["Software Development", "Database Support", "System Testing", "Debugging", "Deployment Support", "Technical Documentation"] },
    { icon: "bi-bezier2", title: "Creative", items: ["UI Design", "User Experience", "Digital Illustration", "Graphic Design", "Multimedia Production", "Visual Communication"] },
    { icon: "bi-person-check", title: "Workplace", items: ["Communication", "Collaboration", "Adaptability", "Problem Solving", "Time Management", "Feedback Management", "Organization"] }
  ];

  const icon = name => `<span class="role-card-icon"><i class="bi ${name}" aria-hidden="true"></i></span>`;
  const chips = items => `<div class="role-chips">${items.map(item => `<span>${item}</span>`).join("")}</div>`;

  document.querySelector("#contribution-snapshot").innerHTML = contributionSnapshot.map(item => `<div class="info-item"><i class="bi ${item.icon}" aria-hidden="true"></i><h5>${item.label}</h5><p>${item.value}</p></div>`).join("");
  document.querySelector("#contribution-grid").innerHTML = contributionAreas.map(item => `<article class="contribution-card">${icon(item.icon)}<h4>${item.title}</h4><p>${item.description}</p>${chips(item.tags)}</article>`).join("");
  const groupMarkup = group => `<article class="role-group-card"><div class="role-group-heading">${icon(group.icon)}<h4>${group.title}</h4></div>${chips(group.items)}</article>`;
  document.querySelector("#tool-groups").innerHTML = toolGroups.map(groupMarkup).join("");
  document.querySelector("#skill-groups").innerHTML = professionalSkillGroups.map(groupMarkup).join("");
  document.querySelector("#workflow-steps").innerHTML = workflowSteps.map((step, index) => `<article class="workflow-step"><span class="workflow-number">${String(index + 1).padStart(2, "0")}</span>${icon(step.icon)}<h4>${step.title}</h4><p>${step.description}</p></article>`).join("");
});

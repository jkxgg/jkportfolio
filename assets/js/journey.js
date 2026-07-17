(() => {
  'use strict';

  const metrics = [
    ['bi-calendar3', '11 Weeks', 'Documented Internship Progress'],
    ['bi-intersect', '2 Workstreams', 'Software Development and Creative Production'],
    ['bi-controller', '20 Topics', 'Grade 5 and Grade 7 English Assets'],
    ['bi-box-seam', 'Final Turnover', 'Tested and Organized Project Deliverables']
  ];

  const journeyWeeks = [
    {week:1,date:'April 29–30, 2026',title:'Onboarding & Project Familiarization',icon:'bi-compass',summary:'Set up the workstation and required development tools, joined the Software Development & Creative Support Team, and became familiar with ICTO’s workflow, communication process, version control practices, and ongoing government and educational projects.',tags:['Onboarding','Workstation Setup','ICTO Workflow']},
    {week:2,date:'May 4–8, 2026',title:'Planning & Development Environment',icon:'bi-diagram-3',summary:'Reviewed the proposed Biñan Access Card modules, explored the CodeIgniter 4 project structure and GitHub workflow, assessed initial interface layouts, and prepared the creative workspace for Grade 7 educational asset production.',tags:['CodeIgniter 4','GitHub','Project Planning']},
    {week:3,date:'May 11–15, 2026',title:'Module Planning & Grade 7 Assets',icon:'bi-window-stack',summary:'Assisted with Dashboard and Manage Records interface refinements while beginning Grade 7 English asset production for Topics 1–4. Submitted outputs, received supervisor feedback, and applied revisions before developer integration.',tags:['Dashboard','Manage Records','Grade 7 Assets']},
    {week:4,date:'May 18–22, 2026',title:'Module Development & Asset Production',icon:'bi-palette',summary:'Continued refining Manage Records and related reference-data modules while creating Grade 7 assets for Topics 5–7. Finalized approved files and prepared them for turnover to the development team.',tags:['UI Refinement','Asset Production','Developer Handoff']},
    {week:5,date:'May 25–29, 2026',title:'Software & Creative Support',icon:'bi-git',summary:'Reviewed core system modules, tracked project revisions through GitHub, and completed the remaining Grade 7 assets for Topics 7–10. Incorporated feedback and prepared the full Grade 7 asset set for implementation.',tags:['GitHub','Grade 7 Completion','Review Cycle']},
    {week:6,date:'June 1–5, 2026',title:'Grade 5 Asset Development',icon:'bi-folder-check',summary:'Refined Account Management and Audit Trails interfaces, reviewed completed system modules, and began producing Grade 5 English assets for Topics 1–4. Organized finalized Grade 7 assets and updated the asset inventory.',tags:['Account Management','Audit Trails','Grade 5 Assets']},
    {week:7,date:'June 8–12, 2026',title:'Core Module Enhancement',icon:'bi-tools',summary:'Continued improving Account Management and Audit Trails, resolved minor interface issues, and developed Grade 5 assets for Topics 5–8. Participated in weekly planning and revision discussions.',tags:['Module Enhancement','Issue Resolution','Grade 5 Production']},
    {week:8,date:'June 15–19, 2026',title:'Grade 5 Completion & Finalization',icon:'bi-check2-square',summary:'Enhanced the Dashboard and Manage Records modules, completed Grade 5 assets for Topics 9–10, finalized revisions, updated the asset inventory, and prepared the complete Grade 5 package for developer integration.',tags:['Grade 5 Completion','Final Revisions','Asset Inventory']},
    {week:9,date:'June 22–26, 2026',title:'Refinement, Revisions & TechTalk',icon:'bi-mic',summary:'Reviewed system-wide interface consistency, resolved remaining issues, finalized educational asset revisions, updated project documentation, and participated in ICT Month: TechTalk 2026 on software practices, cybersecurity, and emerging technologies.',tags:['System Refinement','TechTalk 2026','Documentation']},
    {week:10,date:'June 29–July 3, 2026',title:'QR Verification Development',icon:'bi-qr-code-scan',summary:'Reviewed the QR verification workflow, attended a client meeting with CSWD, helped organize database and validation logic, tested transaction outputs, refined the scanner interface, and documented observations before deployment.',tags:['QR Verification','CSWD Meeting','Validation Logic']},
    {week:11,date:'July 6–10, 2026',title:'Final Testing & Project Turnover',icon:'bi-rocket-takeoff',summary:'Completed end-to-end testing of the QR scanner module, resolved usability issues, confirmed system functionality, applied final revisions, organized source code and approved assets, updated documentation, and prepared all deliverables for turnover.',tags:['End-to-End Testing','Final Revisions','Project Turnover']}
  ];

  const growth = [
    ['bi-compass','Foundation','Learned ICTO workflows, tools, standards, project structures, and team practices during onboarding and familiarization.'],
    ['bi-code-square','Contribution','Supported system modules and produced educational game assets while collaborating with developers, designers, and project supervisors.'],
    ['bi-arrow-repeat','Refinement','Responded to feedback, resolved interface issues, revised assets, improved consistency, and documented completed changes.'],
    ['bi-box-seam','Delivery','Tested, organized, documented, and prepared software and creative outputs for deployment, integration, and final turnover.']
  ];

  const metricsRoot = document.querySelector('#journey-metrics');
  const timelineRoot = document.querySelector('#journey-timeline');
  const growthRoot = document.querySelector('#journey-growth');
  if (!metricsRoot || !timelineRoot || !growthRoot) return;

  metricsRoot.innerHTML = metrics.map(([icon,value,label]) => `<article class="journey-metric"><i class="bi ${icon}" aria-hidden="true"></i><strong>${value}</strong><span>${label}</span></article>`).join('');
  timelineRoot.innerHTML = journeyWeeks.map(item => `<article class="timeline-item"><div class="timeline-marker" aria-hidden="true"><i class="bi ${item.icon}"></i></div><div class="timeline-card"><div class="timeline-meta"><span>Week ${item.week}</span><time>${item.date}</time></div><h3>${item.title}</h3><p>${item.summary}</p><div class="timeline-tags">${item.tags.map(tag => `<span>${tag}</span>`).join('')}</div></div></article>`).join('');
  growthRoot.innerHTML = growth.map(([icon,title,text]) => `<div class="col-xl-3 col-md-6"><article class="growth-stage"><i class="bi ${icon}" aria-hidden="true"></i><h3>${title}</h3><p>${text}</p></article></div>`).join('');
})();

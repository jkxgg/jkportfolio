(() => {
  'use strict';

  const projects = {
    accessCard: {
      title: 'Biñan Access Card MIS',
      summary: 'Government beneficiary management system designed to modernize QR-based verification and aid distribution.',
      slides: [
        ['assets/img/practicum/projects/access_card/mockup.png', 'Biñan Access Card Mockup Design', 'Management Information System', 'Biñan Access Card', 'A clean, user-friendly mockup for efficient beneficiary management and QR verification.'],
        ['assets/img/practicum/projects/access_card/1-login.png', 'Biñan Access Card login page', 'System Access', 'Login Page', 'Secure authentication for Administrator, Encoder, Scanner, and Viewer user roles.'],
        ['assets/img/practicum/projects/access_card/2-dashboard.png', 'Biñan Access Card dashboard', 'System Overview', 'Dashboard', 'An overview of records, members, sectors, services, programs, and recent system activity.'],
        ['assets/img/practicum/projects/access_card/3-manage.png', 'Biñan Access Card Manage Records module', 'Records Module', 'Manage Records', 'A centralized workspace for searching, filtering, importing, adding, and maintaining family records.'],
        ['assets/img/practicum/projects/access_card/4-sector.png', 'Biñan Access Card Sector Management module', 'Administration Module', 'Sector Management', 'Organizes community sectors using short codes, descriptions, status, search, and filtering tools.'],
        ['assets/img/practicum/projects/access_card/5-services.png', 'Biñan Access Card Services and Programs Management module', 'Administration Module', 'Services and Programs', 'Manages available services and programs by code, category, description, and current status.'],
        ['assets/img/practicum/projects/access_card/6-categories.png', 'Biñan Access Card Manage Categories module', 'Administration Module', 'Manage Categories', 'Organizes program categories by name, code, and description with built-in management tools.'],
        ['assets/img/practicum/projects/access_card/7-distribution.png', 'Biñan Access Card Distribution Management module', 'Distribution Module', 'Distribution Management', 'Manages aid types, distribution batches, complete records, availability, and current status.'],
        ['assets/img/practicum/projects/access_card/8-batches.png', 'Biñan Access Card Distribution Batches module', 'Distribution Module', 'Distribution Batches', 'Displays aid batches with their aid type, schedule, status, and open or closed state.'],
        ['assets/img/practicum/projects/access_card/9-qr.png', 'Default Biñan Access Card QR verification screen', 'QR Verification', 'Ready to Scan', 'The default verification screen shown while waiting for a QR control number to be scanned or entered.'],
        ['assets/img/practicum/projects/access_card/10-qr_success.png', 'Successful Biñan Access Card aid distribution scan', 'QR Verification', 'Aid Distribution Scanner', 'Shows verified family information, distribution confirmation, and previous aid history after a successful scan.'],
        ['assets/img/practicum/projects/access_card/11-qr_duplicate.png', 'Biñan Access Card duplicate entry warning', 'Validation Feature', 'Duplicate Entry Detection', 'Prevents repeated aid claims by displaying a warning with earlier distribution details and aid history.'],
        ['assets/img/practicum/projects/access_card/12-reports.png', 'Biñan Access Card Reports module', 'Analytics Module', 'Reports', 'Presents distribution statistics, coverage rates, kiosk performance, charts, and downloadable reports.'],
        ['assets/img/practicum/projects/access_card/13-account.png', 'Biñan Access Card Account Management module', 'User Administration', 'Account Management', 'Organizes user accounts by username, assigned role, and account status with management controls.'],
        ['assets/img/practicum/projects/access_card/14-audit.png', 'Biñan Access Card Audit Trails module', 'System Monitoring', 'Audit Trails', 'Records user and security activities with action details, device information, date, and time.']
      ],
      snapshotHeading: 'Biñan Access Card Snapshot',
      snapshot: [['bi-buildings','Client','City Social Welfare and Development Office'],['bi-pc-display','System Type','Management Information System'],['bi-qr-code-scan','Primary Module','QR Code Verification'],['bi-person-workspace','My Contribution','UI/UX, Validation Logic, Database Support, Testing'],['bi-grid','Core Modules','Dashboard, Records, QR Scanner, Reports'],['bi-code-square','Tools','CodeIgniter 4, PHP, MySQL, Bootstrap, GitHub']],
      overview: 'The Biñan Access Card MIS is a centralized government platform built to improve the way social-welfare beneficiary records and assistance transactions are managed. Developed for the City Social Welfare and Development Office with the ICTO team, it brings record administration, QR code verification, distribution tracking, and reporting into one workflow. My work concentrated on the scanner experience, validation logic, database support, testing, and deployment preparation so authorized personnel could verify beneficiaries quickly and reliably during live distribution activities.',
      info: [['bi-exclamation-circle','Problem','Manual beneficiary validation and assistance recording could be slow, repetitive, and vulnerable to duplicate claims.'],['bi-lightbulb','Solution','A centralized management information system with beneficiary records, QR verification, distribution tracking, and reporting.'],['bi-graph-up-arrow','Impact','The system was prepared and used during an actual City Government of Biñan rice distribution event.']],
      contributions: [['bi-vector-pen','UI/UX Design','Refined the scanner interface and interaction flow for fast, clear field use.'],['bi-qr-code-scan','QR Verification','Helped build the workflow for scanning and confirming beneficiary codes.'],['bi-shield-check','Validation Logic','Supported rules that identify invalid records and prevent duplicate claims.'],['bi-database-check','Database Support','Assisted with reliable record organization and transaction data handling.'],['bi-bug','Testing and QA','Tested features, documented issues, and verified fixes across key workflows.'],['bi-cloud-arrow-up','Deployment Support','Helped prepare and support the system for a live distribution event.']],
      highlights: ['Centralized Beneficiary Management','QR Code-Based Verification','Duplicate Claim Prevention','Live Government Deployment'],
      tools: ['PHP','CodeIgniter 4','MySQL','Bootstrap','GitHub','Visual Studio Code'],
      outcome: 'Successfully prepared and deployed during an actual City Government of Biñan rice distribution event, supporting faster beneficiary verification and more accurate transaction recording.'
    },
    gameAssets: {
      title: 'K–12 Educational Game Assets',
      summary: 'Interactive interfaces, illustrations, and learning assets created for Grade 5 and Grade 7 educational modules.',
      slides: [
        ['assets/img/practicum/projects/k-12/1.png','Overview collage of K–12 educational game assets','Project Overview','K–12 Educational Game Assets','Interactive Grade 5 and Grade 7 learning experiences developed across multiple topics and difficulty levels.'],
        ['assets/img/practicum/projects/k-12/2.png','Organized folder structure for K–12 educational game assets','Production Workflow','Project Organization','Assets were organized by grade, topic, and difficulty for efficient collaboration, retrieval, and implementation.'],
        ['assets/img/practicum/projects/k-12/3.png','Lesson plan transformed into an educational game screen','Curriculum Integration','Lesson Plan to Game Experience','Curriculum objectives were translated into engaging mechanics, visual instructions, and interactive learning challenges.'],
        ['assets/img/practicum/projects/k-12/4.png','Educational feedback screen explaining claims of fact value and policy','Learning Feedback','Evaluate and Learn','Clear feedback screens explain correct answers and reinforce the lesson after each activity.'],
        ['assets/img/practicum/projects/k-12/5.png','Library of characters icons buttons interface elements and backgrounds','Visual Asset System','Asset Library','A reusable collection of characters, icons, controls, panels, backgrounds, and game-ready interface elements.'],
        ['assets/img/practicum/projects/k-12/6.png','Easy average and difficult educational game environments','Difficulty Design','Environment Library','Distinct environments communicate easy, average, and difficult levels through color, lighting, and visual complexity.'],
        ['assets/img/practicum/projects/k-12/7.png','Grade 5 and Grade 7 educational gameplay examples','Gameplay Showcase','Gameplay in Action','Grade-specific activities combine age-appropriate English lessons with interactive challenges and visual cues.'],
        ['assets/img/practicum/projects/k-12/g5-gdrive.png','Google Drive folders containing ten Grade 5 English topics','Grade 5 Delivery','Grade 5 Asset Organization','Ten fourth-quarter English topics were organized in shared folders for revision, collaboration, and developer handoff.'],
        ['assets/img/practicum/projects/k-12/g7-gdrive.png','Google Drive folders containing ten Grade 7 English topics','Grade 7 Delivery','Grade 7 Asset Organization','Ten Grade 7 English topics were structured for clear production tracking and efficient asset integration.']
      ],
      snapshotHeading: 'K–12 Game Assets Snapshot',
      snapshot: [['bi-mortarboard','Target Learners','Grade 5 and Grade 7 Students'],['bi-controller','Project Type','Educational Game Asset Development'],['bi-journal-bookmark','Curriculum Coverage','Fourth Quarter Learning Modules'],['bi-book','Learning Content','20 Interactive Topics'],['bi-bar-chart-steps','Difficulty System','3 Levels per Topic'],['bi-palette','My Contribution','Illustration, UI Design, Game Asset Creation'],['bi-code-square','Tools','Adobe Photoshop, Godot Engine, Google Drive']],
      overview: 'The K–12 Educational Game Assets project supports interactive English modules for Grade 5 and Grade 7 learners during the fourth quarter. Across 20 topics, each with three progressive difficulty levels, the visual system needed to stay engaging, age-appropriate, and consistent while serving different gameplay needs. I created original illustrations, backgrounds, icons, interface elements, popups, and stage-specific screens, then organized the production files so developers could efficiently integrate the assets into Godot and maintain a cohesive learning experience.',
      info: [['bi-exclamation-circle','Problem','Educational game modules required visually consistent, engaging, and curriculum-aligned assets.'],['bi-lightbulb','Solution','Created reusable interface elements, illustrations, backgrounds, icons, popups, and stage-specific game screens.'],['bi-graph-up-arrow','Impact','Produced organized visual assets for Grade 5 and Grade 7 English modules with three difficulty levels per topic.']],
      contributions: [['bi-window','Interface Design','Designed clear menus, controls, prompts, and feedback elements for young learners.'],['bi-brush','Digital Illustration','Created original characters, environments, icons, and educational visuals.'],['bi-controller','Gameplay Screens','Produced stage-specific compositions for lessons and difficulty levels.'],['bi-folder2-open','Asset Organization','Maintained an orderly library with practical naming and export structure.'],['bi-palette2','Visual Consistency','Applied a cohesive visual language across topics, screens, and interactions.'],['bi-box-arrow-right','Developer Handoff','Prepared implementation-ready files and collaborated on integration refinements.']],
      highlights: ['20 Learning Topics','3 Difficulty Levels','Grade 5 and Grade 7 Coverage','Godot-Ready Asset Delivery'],
      tools: ['Adobe Photoshop','Godot Engine','Google Drive','Digital Illustration','UI Asset Design'],
      outcome: 'Delivered organized and visually consistent educational game assets that supported the development of interactive Grade 5 and Grade 7 learning modules.'
    },
    privacyPoster: {
      title: 'Bida ang Privacy Campaign Poster',
      summary: 'A superhero-themed contest entry showing that data privacy is a shared responsibility across the City Government of Biñan.',
      slides: [
        ['assets/img/practicum/projects/poster/1.png','Bida ang Privacy poster project presentation showing the final artwork working file and contest mechanics','Project Overview','From Brief to Final Poster','The completed campaign brought together the contest requirements, an organized Photoshop workflow, and the approved poster design.'],
        ['assets/img/practicum/projects/poster/2.png','Final Bida ang Privacy campaign poster','Final Campaign Artwork','Data Privacy Is a Shared Responsibility','Five representatives look toward the central privacy symbol, showing that data protection belongs to every office and every Biñanense.'],
        ['assets/img/practicum/projects/poster/3.png','Layered Bida ang Privacy poster open in Adobe Photoshop','Design Process','Organized Photoshop Production','The layered working file kept the headline, characters, G.E.L. framework, institutional details, and revisions organized for production.'],
        ['assets/img/practicum/projects/poster/4.png','Bida ang Privacy G.E.L. initiative and contest mechanics','Campaign Brief','Contest Mechanics and Objectives','The brief defined the G.E.L. initiative, campaign goals, three creative categories, participation guidelines, and evaluation criteria.']
      ],
      snapshotHeading: 'Bida ang Privacy Snapshot',
      snapshot: [['bi-building','Organizer','Information and Communications Technology Office'],['bi-trophy','Contest Category','Best Poster or Infographic'],['bi-file-image','Primary Output','Data Privacy Campaign Poster'],['bi-person-workspace','My Contribution','Concept Development, Character Design, Layout, Revisions'],['bi-shield-lock','Core Message','Data Privacy Is Everyone’s Responsibility'],['bi-people','Visual Representation','Five City Government Groups'],['bi-palette','Tools','Adobe Photoshop, Illustrator, Paint Tool SAI'],['bi-check2-circle','Final Use','ICTO Department Contest Entry']],
      overview: 'Bida ang Privacy was an inter-department creative challenge organized by the Information and Communications Technology Office under the G.E.L. initiative: Guard Personal Data, Educate the Workforce, and Lead Privacy Protection. The contest offered three categories—privacy awareness video, poster or infographic, and slogan or jingle—and I was selected to create the department’s poster entry. The design went through several revisions based on the department head’s direction, ultimately using a superhero-inspired composition to communicate that protecting personal data is a shared responsibility across the entire City Government of Biñan.',
      info: [['bi-exclamation-circle','Problem','Data privacy was often perceived as an IT-only concern instead of a responsibility shared by every office and employee.'],['bi-lightbulb','Solution','Created a superhero-themed poster showing five City Government groups united around the National Privacy Commission symbol and shared privacy mission.'],['bi-graph-up-arrow','Impact','Delivered a refined contest entry that clearly framed privacy protection as a citywide culture of accountability, not a task limited to ICTO.']],
      contributions: [['bi-lightbulb','Campaign Concept','Developed the shared-responsibility idea from the contest mechanics and department head’s direction.'],['bi-person-bounding-box','Character Design','Created five superhero-inspired representatives for major groups across the City Government.'],['bi-layout-text-window','Poster Composition','Directed every character’s attention toward the NPC mark as the poster’s central visual focus.'],['bi-fonts','Message Hierarchy','Emphasized “Data Privacy Is a Shared Responsibility” as the immediate campaign takeaway.'],['bi-arrow-repeat','Design Revisions','Refined the characters, layout, messaging, and visual emphasis through multiple review rounds.'],['bi-printer','Final Production','Prepared the approved high-resolution poster as ICTO’s entry in the poster or infographic category.']],
      highlights: ['Selected Poster Category Entry','Five City Government Representatives','Superhero-Themed Visual Story','Department Head-Guided Revisions'],
      tools: ['Adobe Photoshop','Graphic Design','Typography','Layout Composition','Visual Communication'],
      outcome: 'Produced the final Bida ang Privacy poster after several department-head review cycles. Its five superhero-inspired characters represent groups across the City Government of Biñan and look toward the National Privacy Commission symbol, reinforcing the central message that data privacy is not solely ICTO’s responsibility—it is everyone’s responsibility.'
    }
  };

  const app = document.querySelector('#major-projects-app');
  if (!app) return;
  app.querySelector(':scope > .row.d-none')?.remove();
  const panel = app.querySelector('#project-panel');
  const tabs = [...app.querySelectorAll('[role="tab"]')];
  let slider;

  const render = (id, focusHeading = false) => {
    const project = projects[id];
    if (!project) return;
    panel.classList.add('is-changing');
    window.setTimeout(() => {
      tabs.forEach(tab => {
        const selected = tab.dataset.project === id;
        tab.classList.toggle('active', selected);
        tab.setAttribute('aria-selected', selected);
        tab.tabIndex = selected ? 0 : -1;
      });
      panel.setAttribute('aria-labelledby', `tab-${id}`);
      app.querySelector('#project-heading').textContent = project.title;
      app.querySelector('#project-summary').textContent = project.summary;
      app.querySelector('#project-overview').textContent = project.overview;
      app.querySelector('#snapshot-heading').textContent = project.snapshotHeading;
      app.querySelector('#snapshot-items').innerHTML = project.snapshot.map(([icon,label,value]) => `<div class="info-item"><i class="bi ${icon}"></i><h5>${label}</h5><p>${value}</p></div>`).join('');
      app.querySelector('#project-info').innerHTML = project.info.map(([icon,title,text]) => `<div class="col-lg-4"><div class="info-card"><i class="bi ${icon}"></i><h4>${title}</h4><p>${text}</p></div></div>`).join('');
      app.querySelector('#project-contributions').innerHTML = project.contributions.map(([icon,title,text]) => `<div class="col-lg-4 col-md-6"><div class="contribution-card"><i class="bi ${icon}"></i><h4>${title}</h4><p>${text}</p></div></div>`).join('');
      app.querySelector('#project-highlights').innerHTML = project.highlights.map(text => `<div class="col-md-6"><div class="highlight-card"><i class="bi bi-check-circle"></i><h4>${text}</h4></div></div>`).join('');
      app.querySelector('#project-tools').innerHTML = project.tools.map(tool => `<span class="tool-chip">${tool}</span>`).join('');
      app.querySelector('#project-outcome').textContent = project.outcome;
      if (slider) slider.destroy(true, true);
      app.querySelector('#project-slides').innerHTML = project.slides.map(([src,alt,kicker,title,caption]) => `<div class="swiper-slide"><figure class="practicum-slide"><img src="${src}" alt="${alt}" loading="lazy"><figcaption class="slide-caption"><span>${kicker}</span><strong>${title}</strong><p>${caption}</p></figcaption></figure></div>`).join('');
      const sliderElement = app.querySelector('#project-slider');
      slider = new Swiper(sliderElement, {
        loop: project.slides.length > 1,
        speed: 600,
        slidesPerView: 1,
        spaceBetween: 16,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true
        },
        pagination: {
          el: sliderElement.querySelector('.swiper-pagination'),
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: sliderElement.querySelector('.swiper-button-next'),
          prevEl: sliderElement.querySelector('.swiper-button-prev')
        },
        observer: true,
        observeParents: true
      });
      if (history.replaceState) history.replaceState(null, '', `#${id}`);
      panel.classList.remove('is-changing');
      if (focusHeading) app.querySelector('#project-heading').focus({preventScroll:true});
    }, 150);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => render(tab.dataset.project));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
      event.preventDefault();
      let next = index;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      tabs[next].focus();
      render(tabs[next].dataset.project, true);
    });
  });

  const initial = projects[location.hash.slice(1)] ? location.hash.slice(1) : 'accessCard';
  render(initial);
})();

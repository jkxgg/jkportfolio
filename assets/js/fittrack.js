const fittrackScreens = [
  ["0_splash.png","Brand Introduction","Splash Screen","Introduces FitTrack through a focused dark launch screen."],
  ["1_login.jpg","Account Access","Login Screen","Allows existing users to securely access their fitness records."],
  ["2_signup.jpg","Account Setup","Sign Up Screen","Collects the information required to create a new FitTrack account."],
  ["3_dashboard.jpg","Fitness Overview","Dashboard","Displays body metrics, BMI status, calorie guidance, and quick-add actions."],
  ["4_dashboard2.jpg","Progress Monitoring","Dashboard Details","Extends the dashboard with additional daily intake and fitness information."],
  ["5_activitylog.jpg","Workout History","Activity Log","Groups recorded exercises by date for quick progress review."],
  ["6_editactivity.jpg","Record Management","Edit Activity","Lets users update the details of an existing workout entry."],
  ["7_workoutlibrary.jpg","Exercise Discovery","Workout Library","Provides a searchable and filterable collection of exercises by category."],
  ["8_profile.jpg","Personal Account","Profile","Presents user identity and profile information within the app."],
  ["9_editprofile.jpg","Profile Management","Edit Profile","Allows personal details and account information to be updated."]
];
const fittrackSnapshot = [
  ["bi-phone","Platform","Android Mobile Application"],["bi-mortarboard","Project Context","Application Development and Emerging Technologies"],["bi-diagram-3","Architecture","MVVM + REST"],["bi-window","UI Framework","Jetpack Compose"],["bi-cloud-arrow-down","Networking","Ktor HTTP Requests"],["bi-filetype-php","Backend","PHP REST Endpoints"],["bi-activity","Primary Focus","Fitness Activity and Metric Tracking"]
];
const projectGoals = [
  ["bi-journal-plus","Centralized Tracking","Bring workout entries, body measurements, and fitness progress into one mobile experience."],["bi-graph-up","Metric Visibility","Make BMI, weight, height, calorie guidance, and activity history easier to review."],["bi-phone","Accessible Workflow","Support common fitness tasks through a consistent state-driven mobile interface."]
];
const fittrackFeatures = [
  ["bi-person-check","Authentication","Supports user login and sign-up flows for personal account access."],["bi-speedometer2","Fitness Dashboard","Displays body metrics, BMI status, and recommended daily calorie intake."],["bi-calendar2-check","Activity Logging","Records exercises and organizes completed activities by date."],["bi-pencil-square","Activity Editing","Allows existing activity records to be searched and updated."],["bi-list-stars","Workout Library","Provides exercises that users can browse and filter by category."],["bi-person-circle","Profile Management","Displays and updates personal profile and account information."]
];
const architectureParts = [
  ["bi-box","Model","Holds data structures such as UserMetric, ActivityData, Exercises, and UserActivity received from PHP endpoints."],["bi-braces","ViewModel","Manages application logic and state while fetching and processing data through Ktor HTTP requests."],["bi-phone","View","Uses Jetpack Compose for reactive, state-driven screens and conditional visual presentation."],["bi-hdd-network","REST API","Identifies resources through URLs and uses self-contained HTTP requests for reading, creating, updating, and deleting data."]
];
const fittrackFlow = [
  ["bi-person-plus","Access Account","The user signs up or logs in."],["bi-plus-circle","Record Progress","Workouts or body metrics are added."],["bi-cloud-arrow-down","Request Data","The ViewModel uses Ktor to communicate with PHP REST endpoints."],["bi-arrow-repeat","Update State","Returned model data updates the ViewModel state."],["bi-phone","Render Interface","Jetpack Compose reacts to state changes and refreshes the visible screen."]
];
const fittrackTechnologies = [
  {icon:"bi-phone",title:"Interface",items:["Jetpack Compose","Reactive State UI","Composable Screens"]},
  {icon:"bi-diagram-3",title:"Architecture",items:["MVVM","Model","ViewModel","View"]},
  {icon:"bi-cloud",title:"Communication",items:["REST","Ktor","HTTP GET","HTTP POST","HTTP Update","HTTP Delete"]},
  {icon:"bi-filetype-php",title:"Backend",items:["PHP Endpoints","URL Resources","Stateless Requests"]}
];
const fittrackOutcomes = [
  ["bi-grid-1x2","Connected Experience","Combines fitness metrics, workout history, exercise discovery, and profile tools in one application."],["bi-arrow-repeat","Reactive Interface","Demonstrates state-driven screens that respond to ViewModel data changes."],["bi-cloud-check","Client-Server Integration","Connects a Compose mobile interface to REST-style PHP resources through Ktor requests."]
];
const fittrackLearning = [
  ["bi-diagram-3","Separation of Concerns","Shows how MVVM separates data, state logic, and interface rendering."],["bi-braces","State Management","Demonstrates reactive UI updates driven by ViewModel state."],["bi-hdd-network","REST Integration","Applies resource-based, stateless communication between the app and PHP endpoints."],["bi-person-workspace","User-Centered Flows","Organizes frequent fitness tasks around clear navigation and editable records."]
];
const ftCard = ([icon,title,description]) => `<article class="fittrack-card"><span class="fittrack-icon"><i class="bi ${icon}" aria-hidden="true"></i></span><h3>${title}</h3><p>${description}</p></article>`;
document.querySelector("#fittrack-slides").innerHTML = fittrackScreens.map(([file,eyebrow,title,description]) => `<div class="swiper-slide"><figure class="practicum-slide"><img src="assets/img/portfolio/fittrack/${file}" alt="FitTrack ${title} mobile interface" loading="lazy"><figcaption class="slide-caption"><span>${eyebrow}</span><strong>${title}</strong><p>${description}</p></figcaption></figure></div>`).join("");
document.querySelector("#fittrack-snapshot").innerHTML = fittrackSnapshot.map(([icon,label,value]) => `<div class="snapshot-item"><i class="bi ${icon}" aria-hidden="true"></i><div><span>${label}</span><strong>${value}</strong></div></div>`).join("");
[["#project-goals",projectGoals],["#feature-grid",fittrackFeatures],["#architecture-grid",architectureParts],["#outcome-grid",fittrackOutcomes],["#learning-grid",fittrackLearning]].forEach(([selector,data]) => document.querySelector(selector).innerHTML=data.map(ftCard).join(""));
document.querySelector("#app-flow").innerHTML = fittrackFlow.map((step,index) => `<article class="flow-step"><span class="flow-number">${String(index+1).padStart(2,"0")}</span>${ftCard(step)}</article>`).join("");
document.querySelector("#technology-grid").innerHTML = fittrackTechnologies.map(group => `<article class="technology-card"><div><span class="fittrack-icon"><i class="bi ${group.icon}" aria-hidden="true"></i></span><h3>${group.title}</h3></div><div class="fittrack-chips">${group.items.map(item=>`<span>${item}</span>`).join("")}</div></article>`).join("");
document.querySelector("#fittrack-gallery-grid").innerHTML = fittrackScreens.slice(1).map(([file,,title]) => `<a href="assets/img/portfolio/fittrack/${file}" class="glightbox fittrack-gallery-item" data-gallery="fittrack-gallery" title="${title}"><img src="assets/img/portfolio/fittrack/${file}" alt="FitTrack ${title} screen" loading="lazy"><span>${title}<i class="bi bi-arrows-fullscreen" aria-hidden="true"></i></span></a>`).join("");
document.addEventListener("DOMContentLoaded",()=>{if(typeof GLightbox==="function")GLightbox({selector:".fittrack-gallery-grid .glightbox"});});

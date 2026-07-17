const credentials = [
  {file:"ccna2.pdf",type:"pdf",category:"Certificates",title:"CCNA: Switching, Routing, and Wireless Essentials",issuer:"Cisco Networking Academy",date:"March 2025",sortDate:"2025-03"},
  {file:"ccna1.pdf",type:"pdf",category:"Certificates",title:"CCNA: Introduction to Networks",issuer:"Cisco Networking Academy",date:"February 2025",sortDate:"2025-02"},
  {file:"cybersecurity-and-ethical-hacking.jpg",type:"image",category:"Seminars",title:"Cybersecurity & Ethical Hacking",issuer:"CodeStackPH",date:"July 2019",sortDate:"2019-07"},
  {file:"python_basics.jpg",type:"image",category:"Workshops",title:"Python Basics: Pyth Me! Biting into Basic Python",issuer:"",date:"July 2019",sortDate:"2019-07"}
];
const badges = [
  {file:"google-cloud-secure-network.png",title:"Build a Secure Google Cloud Network Skill Badge",issuer:"Google Cloud",url:"https://www.credly.com/badges/cf8b43fd-bfc4-453d-8715-d08d68705f50/public_url"},
  {file:"ccna-introduction-to-networks.png",title:"CCNA: Introduction to Networks",issuer:"Cisco",url:"https://www.credly.com/badges/e563669b-3563-46bd-b398-71728109a1d6/public_url"},
  {file:"ccna-switching-routing-wireless.png",title:"CCNA: Switching, Routing, and Wireless Essentials",issuer:"Cisco",url:"https://www.credly.com/badges/79591e98-d325-440c-ad1c-0026cfecfa15/public_url"},
  {file:"google-cloud-load-balancing.png",title:"Implement Load Balancing on Compute Engine Skill Badge",issuer:"Google Cloud",url:"https://www.credly.com/badges/c90c3381-dbfc-4655-b7e3-a111e1dcdcf8/public_url"},
  {file:"google-cloud-ml-apis.png",title:"Prepare Data for ML APIs on Google Cloud Skill Badge",issuer:"Google Cloud",url:"https://www.credly.com/badges/f2632318-efcd-467a-982d-eb0ca5d06ed5/public_url"},
  {file:"google-cloud-app-dev-environment.png",title:"Set Up an App Dev Environment on Google Cloud Skill Badge",issuer:"Google Cloud",url:"https://www.credly.com/badges/5aa28b9b-32ea-4fda-b727-2eab8e530826/public_url"}
];
const categoryIcons={Certificates:"bi-award",Trainings:"bi-journal-check",Seminars:"bi-mic",Workshops:"bi-tools","Digital Badges":"bi-patch-check"};
const filters=["All","Certificates","Trainings","Seminars","Workshops","Digital Badges"];
const categoryCount=new Set(credentials.map(item=>item.category)).size;
const stats=[
  ["bi-award",credentials.length,"Certificates"],["bi-patch-check",badges.length,"Digital Badges"],["bi-grid",categoryCount,"Training Categories"],["bi-book","Ongoing","Continuous Learning"]
];
document.querySelector("#certification-stats").innerHTML=stats.map(([icon,value,label])=>`<article class="stat-card"><i class="bi ${icon}" aria-hidden="true"></i><strong>${value}</strong><span>${label}</span></article>`).join("");
document.querySelector("#certificate-filters").innerHTML=filters.map((filter,index)=>`<button type="button" class="filter-btn${index===0?" active":""}" data-filter="${filter}" aria-pressed="${index===0}">${filter}</button>`).join("");
const certificateGrid=document.querySelector("#certificate-grid");
const certificateEmpty=document.querySelector("#certificate-empty");
const titleFromFile=file=>file.replace(/\.[^.]+$/,"").replace(/[_-]+/g," ").replace(/\b\w/g,char=>char.toUpperCase());
const renderCredentials=(active="All",query="")=>{
  const normalized=query.trim().toLowerCase();
  const visible=credentials.filter(item=>(active==="All"||item.category===active)&&`${item.title||titleFromFile(item.file)} ${item.issuer} ${item.category}`.toLowerCase().includes(normalized));
  certificateGrid.innerHTML=visible.map(item=>{
    const path=`assets/img/certificates/${item.file}`;
    const title=item.title||titleFromFile(item.file);
    const media=item.type==="image"?`<a href="${path}" class="glightbox certificate-media" data-gallery="certificates" title="${title}"><img src="${path}" alt="${title} certificate" loading="lazy"><span class="media-overlay"><i class="bi bi-arrows-fullscreen" aria-hidden="true"></i>View certificate</span></a>`:`<a href="${path}" target="_blank" rel="noopener noreferrer" class="certificate-media pdf-media" aria-label="Preview ${title} PDF in a new tab"><i class="bi bi-file-earmark-pdf" aria-hidden="true"></i><span>PDF Certificate</span></a>`;
    const actions=item.type==="image"?`<a href="${path}" class="glightbox card-action" data-gallery="certificate-actions" title="${title}"><i class="bi bi-eye" aria-hidden="true"></i>Preview</a>`:`<a href="${path}" target="_blank" rel="noopener noreferrer" class="card-action"><i class="bi bi-eye" aria-hidden="true"></i>Preview PDF</a><a href="${path}" download class="card-action"><i class="bi bi-download" aria-hidden="true"></i>Download</a>`;
    return `<article class="certificate-card" data-category="${item.category}">${media}<div class="certificate-body"><span class="category-badge"><i class="bi ${categoryIcons[item.category]||"bi-award"}" aria-hidden="true"></i>${item.category}</span><h3>${title}</h3>${item.issuer?`<p>${item.issuer}</p>`:""}${item.date?`<time datetime="${item.sortDate}">${item.date}</time>`:""}<div class="certificate-actions">${actions}</div></div></article>`;
  }).join("");
  certificateEmpty.hidden=visible.length!==0;
  if(typeof GLightbox==="function")GLightbox({selector:"#certificate-grid .glightbox"});
};
let activeFilter="All";
renderCredentials();
document.querySelector("#certificate-filters").addEventListener("click",event=>{const button=event.target.closest("button");if(!button)return;activeFilter=button.dataset.filter;document.querySelectorAll(".filter-btn").forEach(item=>{const selected=item===button;item.classList.toggle("active",selected);item.setAttribute("aria-pressed",selected)});renderCredentials(activeFilter,document.querySelector("#certificate-search").value)});
document.querySelector("#certificate-search").addEventListener("input",event=>renderCredentials(activeFilter,event.target.value));
document.querySelector("#badge-grid").innerHTML=badges.length?badges.map(badge=>`<article class="badge-card"><img src="assets/img/badges/${badge.file}" alt="${badge.title} badge" loading="lazy"><h3>${badge.title}</h3><p>${badge.issuer}</p>${badge.url?`<a href="${badge.url}" target="_blank" rel="noopener noreferrer">View Credential <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i></a>`:""}</article>`).join(""):`<div class="empty-badges"><i class="bi bi-patch-check" aria-hidden="true"></i><div><h3>Badge collection ready</h3><p>No digital badge assets have been added yet. Future verified badges can be displayed here without changing the page layout.</p></div></div>`;
const dated=credentials.filter(item=>item.sortDate).sort((a,b)=>b.sortDate.localeCompare(a.sortDate));
document.querySelector("#credential-timeline").innerHTML=dated.map(item=>`<article class="timeline-entry"><span class="timeline-marker"><i class="bi ${categoryIcons[item.category]||"bi-award"}" aria-hidden="true"></i></span><div><time datetime="${item.sortDate}">${item.date}</time><h3>${item.title}</h3>${item.issuer?`<p>${item.issuer}</p>`:""}</div></article>`).join("");
if(!dated.length)document.querySelector("#learning-journey").hidden=true;

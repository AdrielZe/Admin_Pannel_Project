const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.getElementById("close-btn");
const darkMode = document.querySelector(".dark-mode");
const firstPageHistoryButton = document.querySelector("#firstPageHistoryButton");
firstPageHistoryButton.classList.add("currentPage")
const secondPageHistoryButton = document.querySelector("#secondPageHistoryButton");


const history = [
  {
    date: '2023-07-09',
    productName:'JavaScript Tutorial',
    productNumber:'85743',
    paymentStatus:'Due',
    status:'Pending'
 },
 {
    date: '2023-07-07',
   productName:'CSS Full Course',
   productNumber:'97245',
   paymentStatus:'Refunded',
   status:'Declined',

 },
 {
    date: '2023-07-05',
  productName:'Flex-Box Tutorial',
  productNumber:'36452',
  paymentStatus:'Paid',
  status:'Active'
 },
 {
    date: '2023-07-03',
     productName:'C++ Fundamentals',
     productNumber:'483719',
     paymentStatus:'Due',
  },
  {
    date: '2023-07-01',
    productName: 'C++ Fundamentals',
    productNumber: '483719',
    paymentStatus: 'Due',
    status: 'Active'
  },
  {
    date: '2023-06-29',
    productName: 'CSS Full Course',
    productNumber: '97245',
    paymentStatus: 'Refunded',
    status: 'Declined'
  },
  {
    date: '2023-06-27',
    productName: 'Flex-Box Tutorial',
    productNumber: '36452',
    paymentStatus: 'Paid',
    status: 'Pending'
  },
  {
    date: '2023-06-25',
    productName: 'Java Programming Basics',
    productNumber: '725309',
    paymentStatus: 'Paid',
    status: 'Active'
  },
  {
    date: '2023-06-23',
    productName: 'JavaScript Essentials',
    productNumber: '159846',
    paymentStatus: 'Due',
    status: 'Active'
  },
  {
    date: '2023-06-21',
    productName: 'Python Crash Course',
    productNumber: '632541',
    paymentStatus: 'Refunded',
    status: 'Pending'
  },
  {
    date: '2023-06-19',
    productName: 'HTML5 and CSS3 Masterclass',
    productNumber: '846372',
    paymentStatus: 'Paid',
    status: 'Active'
  },
  {
    date: '2023-06-17',
    productName: 'React.js for Beginners',
    productNumber: '403861',
    paymentStatus: 'Due',
    status: 'Active'
  },
  {
    date: '2023-06-15',
    productName: 'PHP Development Guide',
    productNumber: '918274',
    paymentStatus: 'Paid',
    status: 'Active'
  },
  {
    date: '2023-06-13',
    productName: 'Data Structures in Python',
    productNumber: '537290',
    paymentStatus: 'Refunded',
    status: 'Declined'
  },
  {
    date: '2023-06-11',
    productName: 'Angular 10 Crash Course',
    productNumber: '729516',
    paymentStatus: 'Paid',
    status: 'Pending'
  },
  {
    date: '2023-06-09',
    productName: 'CSS Grid Layout Tutorial',
    productNumber: '628437',
    paymentStatus: 'Due',
    status: 'Pending'
  },
  {
    date: '2023-06-07',
    productName: 'JavaScript Algorithms',
    productNumber: '415972',
    paymentStatus: 'Paid',
    status: 'Active'
  },
  {
    date: '2023-06-05',
    productName: 'Python Data Analysis',
    productNumber: '349816',
    paymentStatus: 'Refunded',
    status: 'Pending'
  },
  {
    date: '2023-06-03',
    productName: 'Bootstrap 5 Essentials',
    productNumber: '586923',
    paymentStatus: 'Paid',
    status: 'Active'
  },
  {
    date: '2023-06-01',
    productName: 'Node.js Complete Guide',
    productNumber: '972361',
    paymentStatus: 'Due',
    status: 'Active'
  },
  {
    date: '2023-05-30',
    productName: 'React Native Mobile App Development',
    productNumber: '183649',
    paymentStatus: 'Refunded',
    status: 'Declined'
  },
  {
    date: '2023-05-28',
    productName: 'Vue.js Crash Course',
    productNumber: '537290',
    paymentStatus: 'Paid',
    status: 'Active'
  },
  {
    date: '2023-05-26',
    productName: 'SQL Database Administration',
    productNumber: '492617',
    paymentStatus: 'Due',
    status: 'Pending'
  },
  {
    date: '2023-05-24',
    productName: 'Git and GitHub Masterclass',
    productNumber: '825736',
    paymentStatus: 'Paid',
    status: 'Active'
  },
  {
    date: '2023-05-22',
    productName: 'Data Science with Python',
    productNumber: '739285',
    paymentStatus: 'Paid',
    status: 'Active'
  },
  {
    date: '2023-05-20',
    productName: 'Java Web Development',
    productNumber: '582913',
    paymentStatus: 'Refunded',
    status: 'Declined'
  },
  {
    date: '2023-05-18',
    productName: 'Python Machine Learning',
    productNumber: '146289',
    paymentStatus: 'Due',
    status: 'Pending'
  },
  {
    date: '2023-05-16',
    productName: 'JavaScript Frameworks',
    productNumber: '289356',
    paymentStatus: 'Paid',
    status: 'Active'
  },
  {
    date: '2023-05-14',
    productName: 'AWS Certified Solutions Architect',
    productNumber: '612894',
    paymentStatus: 'Due',
    status: 'Active'
  },
  {
    date: '2023-05-12',
    productName: 'React Native Crash Course',
    productNumber: '291867',
    paymentStatus: 'Refunded',
    status: 'Pending'
  },
  {
    date: '2023-05-10',
    productName: 'MongoDB Essentials',
    productNumber: '798463',
    paymentStatus: 'Paid',
    status: 'Active'
  },
  {
    date: '2023-05-08',
    productName: 'Python Django Web Development',
    productNumber: '468293',
    paymentStatus: 'Due',
    status: 'Active'
  },
  {
    date: '2023-05-06',
    productName: 'Vue.js Advanced Techniques',
    productNumber: '562938',
    paymentStatus: 'Paid',
    status: 'Active'
  },
  {
    date: '2023-05-04',
    productName: 'Java Enterprise Edition',
    productNumber: '498256',
    paymentStatus: 'Refunded',
    status: 'Declined'
  },
  {
    date: '2023-05-02',
    productName: 'JavaScript Design Patterns',
    productNumber: '829461',
    paymentStatus: 'Paid',
    status: 'Active'
  },
  {
    date: '2023-04-30',
    productName: 'Python Web Scraping',
    productNumber: '146728',
    paymentStatus: 'Due',
    status: 'Pending'
  },
  {
    date: '2023-04-28',
    productName: 'HTML Email Templates',
    productNumber: '638127',
    paymentStatus: 'Paid',
    status: 'Active'
  },
  {
    date: '2023-04-26',
    productName: 'JavaScript Frameworks',
    productNumber: '398172',
    paymentStatus: 'Due',
    status: 'Active'
  },
  {
    date: '2023-04-24',
    productName: 'CSS Animations',
    productNumber: '296375',
    paymentStatus: 'Paid',
    status: 'Active'
  },
  {
    date: '2023-04-22',
    productName: 'React.js Advanced Concepts',
    productNumber: '572893',
    paymentStatus: 'Refunded',
    status: 'Declined'
  },
  {
    date: '2023-04-20',
    productName: 'Responsive Web Design',
    productNumber: '918365',
    paymentStatus: 'Paid',
    status: 'Active'
  },
  {
    date: '2023-04-18',
    productName: 'PHP Object-Oriented Programming',
    productNumber: '356281',
    paymentStatus: 'Due',
    status: 'Pending'
  },
  {
    date: '2023-04-16',
    productName: 'Python Flask Web Development',
    productNumber: '926378',
    paymentStatus: 'Paid',
    status: 'Active'
  },
  {
    date: '2023-04-14',
    productName: 'Angular Material',
    productNumber: '468293',
    paymentStatus: 'Refunded',
    status: 'Pending'
  },
  {
    date: '2023-04-12',
    productName: 'Node.js RESTful APIs',
    productNumber: '629841',
    paymentStatus: 'Paid',
    status: 'Active'
  },
  {
    date: '2023-04-10',
    productName: 'CSS Custom Properties',
    productNumber: '368195',
    paymentStatus: 'Due',
    status: 'Active'
  },
  {
    date: '2023-04-08',
    productName: 'JavaScript Async Programming',
    productNumber: '935671',
    paymentStatus: 'Paid',
    status: 'Active'
  },
  {
    date: '2023-04-06',
    productName: 'Python GUI Programming',
    productNumber: '256198',
    paymentStatus: 'Refunded',
    status: 'Declined'
  },
  {
    date: '2023-04-04',
    productName: 'React.js Testing',
    productNumber: '592716',
    paymentStatus: 'Paid',
    status: 'Active'
  },
  {
    date: '2023-04-02',
    productName: 'MySQL Database Administration',
    productNumber: '836912',
    paymentStatus: 'Due',
    status: 'Pending'
  },
  {
    date: '2023-03-31',
    productName: 'Python Automation with Selenium',
    productNumber: '479126',
    paymentStatus: 'Paid',
    status: 'Active'
  },
  {
    date: '2023-03-29',
    productName: 'Vue.js Components',
    productNumber: '256937',
    paymentStatus: 'Refunded',
    status: 'Pending'
  },
 ]
 
 const salesTest = history.slice(0,14);


 const firstPageElements = history.slice(0,20);
 const secondPageElements = history.slice(20,40);

 
  firstPageElements.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
    <td>${order.date}</td>
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.status === "Declined" ?
    "danger" : order.status === "Pending" ? "warning"
    : "primary"}">${order.status}</td>
    <td class="primary">Details</td>
  `;
  tr.style.display = "";
  tr.innerHTML = trContent;
  tr.classList.add("firstHistoryPage")
  document.querySelector("table tbody").appendChild(tr);
  });

  secondPageHistoryButton.addEventListener("click",() => {
    firstPageHistoryButton.classList.remove("currentPage")
    secondPageHistoryButton.classList.add("currentPage")
    const firstPageRows = document.querySelectorAll(".firstHistoryPage");
    const secondPageRows = document.querySelectorAll(".secondHistoryPage");
  
    firstPageRows.forEach((row) => {
      row.style.display="none";
    })

    secondPageRows.forEach((row) => {
      row.style.display= "";
    })
  })


  secondPageElements.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
    <td>${order.date}</td>
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.status === "Declined" ?
    "danger" : order.status === "Pending" ? "warning"
    : "primary"}">${order.status}</td>
    <td class="primary">Details</td>
  `;
  tr.innerHTML = trContent;
  tr.style.display = "none";
  tr.classList.add("secondHistoryPage")
  document.querySelector("table tbody").appendChild(tr);

  firstPageHistoryButton.addEventListener("click", () => {
    secondPageHistoryButton.classList.remove("currentPage");
    firstPageHistoryButton.classList.add("currentPage")
    tr.style.display = "none";

    const firstPageRows = document.querySelectorAll(".firstHistoryPage");
  
    firstPageRows.forEach((row) => {
      row.style.display="";
    })
  })
})



menuBtn.addEventListener("click", () => {
  sideMenu.style.display= "block";
})

closeBtn.addEventListener("click", () => {
  sideMenu.style.display=  "none";
})

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode-variables");
  darkMode.querySelector("span:nth-child(1)").classList.toggle("active");
  darkMode.querySelector("span:nth-child(1)").classList.toggle("active");
})



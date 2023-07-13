tickets = [
  {
    name: "Adriel Oliveira",
    email: "Adrileli201@gmail.com",
    about: "Bugs at homepage",
    date: "11/07/2023",
    hour: "11:00",
    number: 18261,
    message: "I hope this email finds you well. I am writing to bring your attention to a critical matter regarding our company's website. We have identified several bugs that are affecting the functionality and user experience of our homepage. It is crucial that we address these issues promptly to ensure seamless navigation and user satisfaction."
  },
  {
    name: "Suzana Matos",
    email: "suzy@gmail.com",
    about: "Cannot log into the system",
    date: "06/07/2023",
    hour: "20:21",
    number: 341325,
    message: "I want to bring to your attention a critical issue that requires immediate attention. Several users, including myself, are experiencing difficulties accessing our system. We are currently unable to log in and access the necessary functionalities."
  },
  {
    name: "Roberto",
    email: "Robertinho@gmail.com",
    about: "I need to talk to the company ASAP",
    date: "15/07/2023",
    hour: "12:40",
    number: 96041,
    message: "hey, can i have you attention for a moment?\nA lot of comments here around the company have been keeping me stressed."
  },
  {
    name: "Emily Johnson",
    email: "emilyjohnson@example.com",
    about: "Technical Support",
    date: "11/20/2023",
    hour: "14:15",
    number: 54321,
    message: "Dear Support Team,\n\nI hope this email finds you well. I am writing to seek technical support regarding an issue I encountered while using your software. I have been experiencing frequent crashes and system freezes, which severely hampers my work productivity.\n\nI have tried troubleshooting the problem myself by reinstalling the software and updating my system, but the issue persists. It is becoming increasingly frustrating, and I urgently require assistance to resolve this matter.\n\nPlease let me know how I can provide additional information to aid in diagnosing and fixing the problem. Your prompt attention and expertise would be highly appreciated.\n\nThank you in advance for your assistance.\n\nBest regards,\nEmily Johnson"
  },
  {
    name: "Michael Anderson",
    email: "manderson@example.com",
    about: "Product Feedback",
    date: "11/18/2023",
    hour: "10:30",
    number: 98765,
    message: "Hello,\n\nI recently purchased your product, and I wanted to provide some feedback based on my experience. Overall, I am impressed with the features and functionality your product offers. It has been instrumental in streamlining our workflow and enhancing productivity within our team.\n\nHowever, I would like to suggest some improvements that I believe would further enhance the user experience. Firstly, the interface could benefit from more intuitive navigation and better organization of options. Additionally, it would be valuable to have additional customization options to tailor the product to our specific needs.\n\nI hope you find this feedback helpful. If you would like further details or clarification on any of my suggestions, please do not hesitate to reach out. Thank you for considering my input, and I look forward to seeing further enhancements to your product in the future.\n\nBest regards,\nMichael Anderson"
  },
  {
    name: "Sophia Williams",
    email: "sophiawilliams@example.com",
    about: "Order Inquiry",
    date: "11/15/2023",
    hour: "16:45",
    number: 24680,
    message: "Dear Customer Support,\n\nI hope this message finds you well. I am reaching out to inquire about the status of my recent order. I placed the order on [date] and opted for express shipping to ensure prompt delivery.\n\nHowever, it has been longer than the estimated delivery time, and I have yet to receive any updates or tracking information. I am concerned about the delay and would appreciate any information you can provide regarding the status of my order.\n\nIf there are any issues or unexpected delays, I would like to request your assistance in resolving them as quickly as possible. I value your dedication to customer satisfaction and trust that you will prioritize my inquiry.\n\nThank you for your attention to this matter, and I look forward to your prompt response.\n\nKind regards,\nSophia Williams"
  },
  {
    name: "David Thompson",
    email: "davidthompson@example.com",
    about: "Account Access Issue",
    date: "11/25/2023",
    hour: "09:00",
    number: 13579,
    message: "Dear Support Team,\n\nI am writing to seek assistance regarding an issue I am facing with my account access. Despite entering the correct login credentials, I am unable to log in and access my account.\n\nI have tried resetting my password and clearing browser cache, but the problem persists. This situation is particularly concerning as I have important data and documents stored within my account that I need access to urgently.\n\nI kindly request your immediate attention to resolve this matter and restore my account access. If any additional information is required from my end, please let me know, and I will provide it promptly.\n\nThank you for your assistance in advance.\n\nBest regards,\nDavid Thompson"
  },
  {
    name: "Olivia Wilson",
    email: "oliviawilson@example.com",
    about: "Product Feature Request",
    date: "11/22/2023",
    hour: "13:30",
    number: 24680,
    message: "Hello,\n\nI hope this message finds you well. I am a long-time user of your product, and I want to share a feature request that I believe would greatly benefit both individual users and businesses.\n\nI have been using your software extensively for project management, and while it offers excellent functionality, I believe that the addition of a Gantt chart feature would significantly enhance its project planning capabilities. The ability to visualize project timelines, dependencies, and resource allocation in a Gantt chart format would provide users with a comprehensive overview and improve project coordination.\n\nI wanted to express my enthusiasm for this potential feature and its potential positive impact on the overall user experience. I would appreciate it if you could consider my suggestion and discuss it with your product development team.\n\nThank you for your attention and dedication to continuously improving your product.\n\nBest regards,\nOlivia Wilson"
  }
]

tickets.forEach((ticket) => {
  const tr = document.createElement("tr");
  const trContent = `
    <td class="ticket-name">${ticket.name}</td>
    <td class="ticket-email">${ticket.email}</td>
    <td class="ticket-about">${ticket.about}</td>
    <td class="ticket-date">${ticket.date}</td>
    <td class="ticket-hour">${ticket.hour}</td>
    <td class="ticket-number">${ticket.number}</td>
    <td class="ticket-message">${ticket.message}</td>
  `;
  tr.innerHTML = trContent;
  tr.classList.add("ticketRow")
  document.querySelector("table tbody").appendChild(tr);
})

const ticketRow = document.querySelectorAll(".ticketRow");

ticketRow.forEach((element) => {
  element.addEventListener("click", () => {
    const name = element.querySelector('.ticket-name').textContent;
    const email = element.querySelector('.ticket-email').textContent;
    const about = element.querySelector('.ticket-about').textContent;
    const date = element.querySelector('.ticket-date').textContent;
    const hour = element.querySelector('.ticket-hour').textContent;
    const number = element.querySelector('.ticket-number').textContent;
    const message = element.querySelector('.ticket-message').textContent;
    showOverlay(name, email, about, date, hour, number,message);
    
    if(element.id != "mailOpened"){
      element.id = "mailOpened";
      element.querySelector('.ticket-name').classList = "";
      element.querySelector('.ticket-about').classList = "";
      const ticketNumbers = document.querySelector(".message-count");
      ticketNumbers.innerText -= 1;
      if(ticketNumbers.innerText == 0){
        ticketNumbers.innerText = "";
        ticketNumbers.classList = ""
      }
    }
    })
  });

function showOverlay(name,email,about,date,hour,number,message){
  const overlay = document.createElement("div");
  overlay.className= "overlay";

  const content = document.createElement("div");
  content.className = "overlay-content";
  content.innerHTML = `
       <div class="overlay_elements">
       <p id="overlay_name">${name}</p>
       <p id="overlay_email">${email}</p>
       <p id="overlay_about">${about}</p>
       <p id="overlay_date">${date}</p>
       <p id="overlay_hour">${hour}</p>
       <p id="overlay_number">${"#" + number}</p>
       </div>
  `;

  const sentMessage = document.createElement("div");
  sentMessage.className = "email";
  sentMessage.innerHTML = "<p> Sent to you: </p>";
  
  const emailMessage = document.createElement("div");
  emailMessage.className = "mailSquare";
  emailMessage.innerText = message;

  overlay.addEventListener("click", () => {
    closeOverlay();
  }); 

  

  overlay.appendChild(content);
  content.appendChild(sentMessage);
  content.appendChild(emailMessage)
  document.body.appendChild(overlay); 
}


function closeOverlay(){
  const overlay = document.querySelector(".overlay");
  if(overlay) {
    overlay.parentNode.removeChild(overlay);
  }
}

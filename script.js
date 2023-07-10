const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.getElementById("close-btn");
const darkMode = document.querySelector(".dark-mode");
const showAllOrdersButton = document.querySelector("#showAllBtn");
const showLessOrdersButton = document.querySelector("#showLessBtn");
const goToHistoryButton = document.querySelector("#goToHistory");

goToHistoryButton.style.display = "none";
showLessOrdersButton.style.display = "none";

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

Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.status === "Declined" ?
    "danger" : order.status === "Pending" ? "warning"
    : "primary"}">${order.status}</td>
    <td class="primary">Details</td>
  `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
})

showAllOrdersButton.addEventListener("click", () => {
  fullOrders.forEach((order) => {
    const tr = document.createElement("tr");
    const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.status === "Declined" ?
    "danger" : order.status === "Pending" ? "warning"
    : "primary"}">${order.status}</td>
    <td class="primary">Details</td>
  `;
  tr.innerHTML = trContent;
  tr.classList.add("allOrders")
  document.querySelector("table tbody").appendChild(tr);
  })
  
  showAllOrdersButton.style.display = "none";
  showLessOrdersButton.style.display = "";
  goToHistoryButton.style.display = "";
})

showLessOrdersButton.addEventListener("click", () => {
  const allOrders = document.querySelectorAll(".allOrders")
  showAllOrdersButton.style.display = "";
  showLessOrdersButton.style.display = "none";
  goToHistoryButton.style.display = "none";
  allOrders.forEach((item) => {
   item.parentNode.removeChild(item)
  })
})


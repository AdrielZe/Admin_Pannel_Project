let imgNumber = 1;

const salesList = [
  {
    date: '2023-07-09',
    productName:'JavaScript Tutorial',
    productNumber:'85743',
    paymentStatus:'Due',
    status:'Pending',
    price:'$ 74.10',
    client:'John Doe'
 },
 {
    date: '2023-07-07',
   productName:'CSS Full Course',
   productNumber:'97245',
   paymentStatus:'Refunded',
   status:'Declined',
   price: '$ 18.32',
   client:'Merci Neth'
 },
 {
    date: '2023-07-05',
  productName:'Flex-Box Tutorial',
  productNumber:'36452',
  paymentStatus:'Paid',
  status:'Active',
  price:'$ 58.23',
  client:'Phill Brandon'
 },
 {
    date: '2023-07-03',
     productName:'C++ Fundamentals',
     productNumber:'483719',
     paymentStatus:'Due',
     status:'Active',
     price:'$ 16.32',
     client:'Justin Doll'
  },
  {
    date: '2023-07-01',
    productName: 'C++ Fundamentals',
    productNumber: '483719',
    paymentStatus: 'Due',
    status: 'Active',
    price:'$ 32.01',
    client:'Helena Uko'
  },
  {
    date: '2023-06-29',
    productName: 'CSS Full Course',
    productNumber: '97245',
    paymentStatus: 'Refunded',
    status: 'Declined',
    price:'$ 93.21',
    client:'Abmir Manbak'
  },
  {
    date: '2023-06-27',
    productName: 'Flex-Box Tutorial',
    productNumber: '36452',
    paymentStatus: 'Paid',
    status: 'Pending',
    price:'$ 18.21',
    client:'Yuri Rels'
  },
  {
    date: '2023-06-25',
    productName: 'Java Programming Basics',
    productNumber: '725309',
    paymentStatus: 'Paid',
    status: 'Active',
    price:'$ 21.42',
    client:'Gordon Phillips'
  },
  {
    date: '2023-06-23',
    productName: 'JavaScript Essentials',
    productNumber: '159846',
    paymentStatus: 'Due',
    status: 'Active',
    price:'$ 219.32',
    client:'Hugo Hans'
  },
  {
    date: '2023-06-21',
    productName: 'Python Crash Course',
    productNumber: '632541',
    paymentStatus: 'Refunded',
    status: 'Pending',
    price:'$ 461.21',
    client:'Jeffrey Jumil'
  },
  {
    date: '2023-06-19',
    productName: 'HTML5 and CSS3 Masterclass',
    productNumber: '846372',
    paymentStatus: 'Paid',
    status: 'Active',
    price:'$ 271.53',
    client:'Jamal Houston'
  },
  {
    date: '2023-06-17',
    productName: 'React.js for Beginners',
    productNumber: '403861',
    paymentStatus: 'Due',
    status: 'Active',
    price:'$ 24.2',
    client:'Thiago Tharciso'
  },
  {
    date: '2023-06-15',
    productName: 'PHP Development Guide',
    productNumber: '918274',
    paymentStatus: 'Paid',
    status: 'Active',
    price:'$ 41.21',
    client:'Morgana Reis'
  },
  {
    date: '2023-06-13',
    productName: 'Data Structures in Python',
    productNumber: '537290',
    paymentStatus: 'Refunded',
    status: 'Declined',
    price:'$ 52.1',
    client:'Humber Gheks'
  },
  {
    date: '2023-06-13',
    productName: 'Data Structures in Python',
    productNumber: '537290',
    paymentStatus: 'Refunded',
    status: 'Declined',
    price:'$ 52.1',
    client:'Humber Gheks'
  },
  {
    date: '2023-06-13',
    productName: 'Data Structures in Python',
    productNumber: '537290',
    paymentStatus: 'Refunded',
    status: 'Declined',
    price:'$ 52.1',
    client:'Humber Gheks'
  }

]


salesList.forEach((sale) => {
  const div = document.createElement("div");
  const divContent = `
    <img src="./assets/product${imgNumber}.png" alt="product_img";
    <p>Product name: ${sale.productName}\n</p>
    <p>Client name: ${sale.client}</p>
    <p>Product price: ${sale.price}</p>
  `;
  imgNumber++;
  div.innerHTML = divContent;
  
  div.classList.add("sales")
  document.querySelector(".sales_page_list_sales").appendChild(div);
})
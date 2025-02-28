// challg one
/*
let webTitle = "Elzero", webDescription ="Elzero Web School", creationDate = "25/10";

let code = `
<div>
    <h3>Hello ${webTitle}</h3>
    <p>${webDescription}</p>
    <span>${creationDate}</span>
</div>
`;
let result = code.repeat(4)
document.write(result);*/

// challg two(22)
/*
let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * e); 
console.log(-d + ++e * ++g + ++f); 

*/

// challg three(26)
/*
let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

console.log(Math.trunc(Math.min(a, b, c, d)));

console.log(Math.pow(a, Math.round(d)));

console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(parseInt(d));

a.slice(2, 6)

console.log((Math.floor(b) / Math.ceil(d)).toFixed(2));
console.log(Math.ceil(b) / Math.ceil(d));
*/

// challg three(30)
/*
let a = "Elzero Web School";

console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));

console.log(a.charAt(13).toUpperCase().repeat(8));

console.log(a.split(" ", 1));

console.log(a.substr(0, 6) + " " + a.substr(11, 17));

console.log(a.charAt(0).toLowerCase() + a.slice(1, length-1).toUpperCase() + a.substr(-1).toLowerCase());
*/

// challg three(37)
/*
let a = 10;
if (a < 10) {
  console.log(10);
} else if (a >= 10 && a >= 40) {
  console.log("10 to 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("unknown");
}

a > 10
  ? console.log(10)
  : a >= 10 && a >= 40
  ? console.log("10 to 40")
  : a > 40
  ? console.log("> 40")
  : console.log("unknown");

    let st = "Elzero Web School";

    if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
        console.log("Good");
    }

    if (st.length !== "string") {
        console.log("Good");
    }

    if (typeof st.length === "number") {
        console.log("Good");
    }

    if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
        console.log("Good");
    }

    if ((st.length * 2).toString() === "34") {
        console.log("Good");
    }
*/
// challg four(47)
/*
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log(my);
// console.log(my.reverse());
let nn = my.reverse().splice(zero, --counter);

console.log(my); // ['Osama', 'Elham', 'Mazero', 'Ahmed']
console.log(my.slice(++zero, ++counter));  //["Elham", "Mazero"]
let loag = console.log(my[zero].slice(--zero, --counter).concat(my[counter].slice(counter))); //"Elzero"
console.log(my[counter].slice(length - counter)); //"ro"
*/
// challg four(56)
/*
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"]
let myEmplowees = ["Amged", "Sameh", "Ameer", "Omar", "Othman", "Amany", "Samia"]
let showAdmins = 3;
counterOne = 1;
counterTwo = 1;
counterThree = 1;

document.write(`<div>We Have ${showAdmins} Admins</div>`);

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  document.write(`<hr>`);
  document.write(`<div>`);
  document.write(`<div>The Admin For Team ${i + 1} Is ${myAdmins[i]}</div>`);
  document.write(`<h3>Team Members</h3>`);
  for (let j = 0; j < myEmplowees.length; j++) {
    if (myAdmins[i].startsWith("A") && myEmplowees[j].startsWith("A")) {
      document.write(`<p> ${counterOne++}- ${myEmplowees[j]}</p>`)
    } else if(myAdmins[i].startsWith("O") && myEmplowees[j].startsWith("O")) {
      document.write(`<p> ${counterTwo++}- ${myEmplowees[j]}</p>`)
    } else if(myAdmins[i].startsWith("S") && myEmplowees[j].startsWith("S")) {
      document.write(`<p> ${counterThree++}- ${myEmplowees[j]}</p>`)
    }
    
  }
  document.write(`</div>`);

}
*/

// challg four(63)
/*
function showDetails(a, b, c) {
  let name;
  let age;
  let status;
  // if (typeof a === "string") {
  //   name = a;
  // }else if (typeof a === "number") {
  //   age = a;
  // }else {
  //   status = a;
  // }
  // if (typeof b === "string") {
  //   name = b;
  // }else if (typeof b === "number") {
  //   age = b;
  // }else {
  //   status = b;
  // }
  // if (typeof c === "string") {
  //   name = c;
  // }else if (typeof c === "number") {
  //   age = c;
  // }else {
  //   status = c;
  // }
  
  // if (status === true) {
  //   status = "You Are Available For Hire"
  // } else {
  //   status = "You Are Not Available For Hire"
  // }
  typeof a === "string" ? name = a :  typeof a === "number" ? number = a : status = a;
  typeof b === "string" ? name = b :  typeof b === "number" ? number = b : status = b;
  typeof c === "string" ? name = c :  typeof c === "number" ? number = c : status = c;

  status === true ? status = "You Are Available For Hire" : status = "You Are Not Available For Hire";
  document.write(`<p>Hello ${name}, Your Age Is ${age}, ${status}</p>`)
}

showDetails("Osama", 38, true)
showDetails(38, "Osama", true)
showDetails(true, 38, "Osama")
showDetails(false, "Osama", 38)
*/

// challg four(70)
/*
// let names = function (...fullName) {
//   return `String [${fullName.join("], [")}] => Done !`
// }

let names =  (...fullName) => `String [${fullName.join("], [")}] => Done !`

console.log(names("Osana", "Mohamed", "Ali", "Ibrahim"));
*/

// challg five(78)
// let mtString = "1,2,3,EE,l,z,e,r,o,_S,c,h,o,o,1,2,0,z";

// let mySolution =  

// challg five(  )


// let i = 0
// const loooop = () => {
  //    i += 1 ;
//   let myElmentDiv = document.createElement("Div");
//   myElmentDiv.className = "prodect"
  
//   let myElementh = document.createElement("h3")
//   myElementh.innerText = `${i} Abdelazem Elwan`
//   myElmentDiv.appendChild(myElementh)
  
//   let myelep = document.createElement("p")
//   myelep.innerText = "Front End react"
//   myElmentDiv.appendChild(myelep);
  
  
//   document.body.appendChild(myElmentDiv)
// }

// for (let i = 0; i < 100; i++) {
//   loooop()
//   }

// challg five(101)

/* 
// let create = el => document.createElement(`${el}`)
// create element 
let header = document.createElement("header");
let logo = document.createElement("h1");
let menu = document.createElement("ul");
let content = document.createElement("div");
let footer = document.createElement("footer");


// create classes
header.className = "website-head";
logo.className = "logo";
menu.className = "menu";
content.className = "content";
footer.className = "footer";


// add to page

header.append(logo);
header.append(menu);
document.body.append(header)
document.body.append(content)
document.body.append(footer)

// add header-text + footer-text
logo.innerText = "ELzero";
footer.innerText = "Copynght 2021";

// style
document.body.style.cssText = "margin: 0; font-family: tahoma, Arial; background-color: rgb(236, 236, 236)"
header.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding-inline: 20px ;";
logo.style.cssText = "color: rgb(35, 169, 110); font-size: 30px; font-weight: 500;"
menu.style.cssText = "display : flex; gap: 20px; margin: 0";
content.style.cssText = "display: flex; gap: 10px; flex-wrap: wrap; padding: 20px; justify-content:center; box-sizing: border-box; min-height: calc(100vh - 142px)"
footer.style.cssText = "text-align: center; font-weight: 500; font-size: 25px; padding: 15px; color: #fff; background-color: rgb(35, 169, 110) ; margin -top:30px;"


// loop for menu and content
for (let i = 1; i <= 15; i++) {
  if (i <= 4) {

    let contMenu = ["Home", "Service", "Aout", "Contact"]
    let menuList = document.createElement("li");
    menuList.className = `menu-list-${i}`
    menuList.innerText = contMenu[i - 1];
    menuList.style.cssText = "list-style: none; cursor: pointer"
    menu.append(menuList);
  }

  let prodBox = document.createElement("div");
  prodBox.className = "product";
  prodBox.textContent = "product";

  let prodNum = document.createElement("span");
  prodNum.textContent = `${i}`

  prodBox.prepend(prodNum);
  content.append(prodBox)

  // product style 
  prodBox.style.cssText = "color: rgb(136, 136, 136); padding: 20px; background-color: White; border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); border-radius: .5rem; box-sizing: border-box; text-align: center";
  prodNum.style.cssText = "display: block; color: black; font-size: 40px; margin-bottom: 20px";

}
 */



// var cartona = "";
// for (var i = 0; i < 100; i++) {
  
//   if (i % 2 === 0) {
//     cartona += "<h3 class='dark'>Rout</h3>"
//   } else {
//     cartona += "<h3 class='light'>Rout</h3>"
//   }
  

// }
// document.getElementById("demo").innerHTML = cartona ;




// Assigment one js?
/* Write a program that allow to user enter number then printit
// اكتب برنامج يخليك تاخد من اليوزر رقم وتطبعه.
Example
Input: 5
Output: 5
*/ 
// let num = Number(prompt("Enter a number"));
// let num = +prompt("Enter a number");
// console.log(num);




//  Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no
//   ااكتب برنامج يخليك لو القيمه الي اليوزر بيكتبها تقبل القسمه علي تلاته واربعه يطلع يس غير كدا يطلع نو
// Example1
// Input: 12 Output Yes
// Example 2
// Input: 9 Output No

// let num = +prompt("Enter a number");
// if( num % 3 === 0 && num % 4 === 0){
//   console.log("Yes");
// }else{
//   console.log("No");
// }




// Write a program that allows the user to insert 2 integers then print the max
// Example1
// Input: 3 5
// Output: 5
// Example 2
// Input: 10 7
// Output: 10


// let num1 = +prompt("Enter a number");
// let num2 = +prompt("Enter a number");

// if (num1 > num2) {
//   console.log(num1);
  
// } else {
//   console.log(num2);
// }

// let num = +prompt("Enter a number");

// if (num > 0) {
//   console.log("positive");
  
// }else{
//   console.log("negative");

// }


// let num1 = +prompt("Enter a number1");
// let num2 = +prompt("Enter a number2");
// let num3 = +prompt("Enter a number3");

// if(num1 > num2 && num1 > num3){
//   console.log(`max element = ${num1}`);
// }
// else if(num2 > num1 && num2 > num3){
//   console.log(`max element = ${num2}`);
// }
// else if(num3 > num2 && num3 > num1){
//   console.log(`max element = ${num3}`);
// }

// if(num1 < num2 && num1 < num3){
//   console.log(`min element = ${num1}`);
// }
// else if(num2 < num1 && num2 < num3){
//   console.log(`min element = ${num2}`);
// }
// else if(num3 < num2 && num3 < num1){
//   console.log(`min element = ${num3}`);
// }


// let num = +prompt("Enter a number1");

// if (num % 2 === 0) {
//   console.log("even");
// }else{
//   console.log("odd");
// }

// let char = prompt("Enter a number1");

// if (char === "a" || char === "A") {
  //   console.log("vowel");
  
  // }else if (char === "e" || char === "E") {
//   console.log("vowel");
  
// }else if (char === "i" || char === "I") {
//   console.log("vowel");
  
// }else if (char === "o" || char === "O") {
//   console.log("vowel");
  
// }else if (char === "u" || char === "U") {
//   console.log("vowel");
  
// }else{
  //   console.log("constant");
  // }
  
  
// let num = +prompt("Enter a number1");

// for (let i = 1; i <= num; i++) {
//   console.log(i);
// }

// let num = +prompt("Enter a number1");

// for (let i = 1; i <= 12; i++) {
//   console.log(num * i);
// }


// let num = +prompt("Enter a number1");

// for (let i = 1; i <= num; i++) {
//   if (i % 2 === 0) {
    
//     console.log(i);
//   }
// }


// let num1 = +prompt("Enter a number1");
// let num2 = +prompt("Enter a number1");

// var result = 1
// for(let i=1 ; i<=num2 ; i++) {
//   result *= num1
// }
// console.log(result);

// let num1 = +prompt("Enter a number1");
// let num2 = +prompt("Enter a number2");
// let num3 = +prompt("Enter a number3");
// let num4 = +prompt("Enter a number4");
// let num5 = +prompt("Enter a number5");

// let sum = num1 + num2 + num3 + num4 + num5;
// console.log(`Total marks ${sum}`);

// let aver = sum / 5;
// console.log(aver);

// let percentage = (sum / 500) * 100;
// console.log(`${percentage} %`);


// let month = +prompt("Enter a number1");

// if (month >= 1 && month <= 12) {
  
//   if (month === 4 || month === 6 || month === 9 || month === 11) {
//     console.log("31 day");
    
//   }else if(month === 2){
//     let year = +prompt("Ener a Years")
//     if (year % 4 === 0 && year %100 !== 0 || year % 400 ===0) {
//       console.log("29 day");
      
//     } else {
//       console.log("28 day");
//     }
//   }else{
//     console.log("30 day");
//   }
// }else{
//   console.log("invalid month");
// }


// let num1 = +prompt("Enter a number1");
// let num2 = +prompt("Enter a number2");
// let num3 = +prompt("Enter a number3");
// let num4 = +prompt("Enter a number4");
// let num5 = +prompt("Enter a number5");

// let sum = num1 + num2 + num3 + num4 + num5;
// let aver = sum / 5;
// let percentage = (sum / 500) * 100 ;

// if (percentage >= 90 ) {
//   console.log("grad A");
// } 
//   else if (percentage >= 80 ) {
//   console.log("grad B");
// } 
//   else if (percentage >= 70) {
//   console.log("grad C");
// } 
//   else if (percentage >= 60) {
//   console.log("grad D");
// } 
//   else if (percentage >= 40) {
//   console.log("grad E");
// } 
//   else if (percentage < 40) {
//   console.log("grad F");
// } 


// let month = +prompt("Enter a number1");

// if (month >= 1 && month <= 12) {
  
//   if (month === 4 || month === 6 || month === 9 || month === 11) {
//     for (let i = 1; i <= 31; i++) {
//       console.log(i);
//     }
//   }else if(month === 2){
//     let year = +prompt("Ener a Years")
//     if (year % 4 === 0 && year %100 !== 0 || year % 400 ===0) {
//       for (let i = 1; i <= 29; i++) {
//         console.log(i);
//       }
//     } else {
//       for (let i = 1; i <= 28; i++) {
//         console.log(i);
//       }
//     }
//   }else{
//     for (let i = 1; i <= 30; i++) {
//       console.log(i);
//     }
//   }
// }else{
//   console.log("invalid month");
// }

// let num1 = +prompt("Enter a number1");
// let num2 = +prompt("Enter a number2");
// if (num1 > num2) {
//   console.log(num1);
// }else{
//   console.log(num2);
// }


// let num = +prompt("Enter a number");
// if (num > 0) {
//   console.log("number positive");
// }else if(num === 0){
//   console.log("number zero");
// }else{
//   console.log("number negative");
// }































// ///////////////////////////CRUD///////////////
// /////////////////


var productNameInput = document.getElementById("productName");
var productpriceInput = document.getElementById("productprice");
var productCategaryInput = document.getElementById("productCategary");
var productDescriptionInput = document.getElementById("productDescription");
var productImageInput = document.getElementById("productImage");
var rowData = document.getElementById("row-data");
var searchInput = document.getElementById("searchInput");

var addBtn = document.getElementById("addBtn");
var updBtn = document.getElementById("updBtn");


var carutIndex 

var prodactList = [];

if (localStorage.getItem("prodactContact") !== null) {
  prodactList = JSON.parse(localStorage.getItem("prodactContact"));
  displayData()
}


function addprodact() {
  
  if (
    validatinInput( productNameInput , "msgName"  ) &&
    validatinInput( productpriceInput , "msgprice"  ) &&
    validatinInput( productCategaryInput , "msgCategary"  ) &&
    validatinInput( productDescriptionInput , "msgDescription"  ) &&
    validatinInput( productImageInput , "msgImag"  )
  ) {
    
    var prodect = {
      name: productNameInput.value.trim(),
      price: productpriceInput.value,
      category: productCategaryInput.value.trim(),
      description: productDescriptionInput.value.trim(),
      image: productImageInput.files[0] ? `image/${productImageInput.files[0]?.name}`:"image/advert1-removebg-preview.png",
    };


    prodactList.push(prodect);


    localStorage.setItem("prodactContact" , JSON.stringify(prodactList))

    displayData();

    clear();
  }
  
}

function displayData() {
  var cartona = "";
  for (let i = 0; i < prodactList.length; i++) {
    cartona += createCols(i);
  }
  rowData.innerHTML = cartona;
}

function searchData(){
  var term = searchInput.value;

  var cartona = "";
  for (let i = 0; i < prodactList.length; i++) {
    if (prodactList[i].name.toLowerCase().includes(term.toLowerCase())) {
      
      cartona += createCols(i);

    }
  }
  rowData.innerHTML = cartona;
}

function createCols(i){

  var regex = new RegExp(searchInput.value , "gi")

  return `
  <div class="col-md-3 mb-3">
            <div class="card text-center h-100">
                <img class="card-img-top" src="${prodactList[i].image}" alt="${prodactList[i].name}" />
                <span class="text-capitalize">Id: ${i+1}</span>
                <div class="card-body">
                    <h4 class="card-title text-capitalize h">product Name: ${prodactList[i].name.replace(regex , (match)=>`<span class="bg-info">${match}</span>`)}</h4>
                    <p class="card-text text-capitalize">product price:${prodactList[i].price}</p>
                    <p class="card-text text-capitalize">product category:  ${prodactList[i].category}</p>
                    <p class="card-text text-capitalize">product description:  ${prodactList[i].description}</p>
                </div>
                <div class="card-btn card-footer text-center">
                    <button onclick=(deleteItem(${i})) class="btn btn-outline-danger btn-sm text-capitalize">delete</button>
                    <button onclick=(setUpdateInfo(${i})) class="btn btn-outline-warning btn-sm text-capitalize">update</button>
                </div>
            </div>
        </div>
  `;
}

function clear(){
  productNameInput.value = null;
  productpriceInput.value = null;
  productCategaryInput.value = null;
  productDescriptionInput.value = null;
  productImageInput.value = null;


  productNameInput.classList.remove("is-valid");
  productpriceInput.classList.remove("is-valid");
  productCategaryInput.classList.remove("is-valid");
  productDescriptionInput.classList.remove("is-valid");
  productImageInput.classList.remove("is-valid");
}


function deleteItem(index){

  prodactList.splice(index, 1);

  localStorage.setItem("prodactContact", JSON.stringify(prodactList));

  displayData();
  
}


function setUpdateInfo(index){ 
  carutIndex = index;

  productNameInput.value = prodactList[index].name
  productpriceInput.value = prodactList[index].price
  productCategaryInput.value = prodactList[index].category
  productDescriptionInput.value = prodactList[index].description
  addBtn.classList.add("d-none");
  updBtn.classList.remove("d-none");
  
  validationName() 
  validationPrice() 
  validationCategary() 
  validationDescription() 
  validatinImage()

}

function uppdate(){
  
  var prodect = {
    name: productNameInput.value,
    price: productpriceInput.value,
    category: productCategaryInput.value,
    description: productDescriptionInput.value,
    image: productImageInput.files[0] ? `image/${productImageInput.files[0]?.name}`:"image/advert1-removebg-preview.png",
  };
  prodactList.splice(  carutIndex  ,    1       ,   prodect  );

  localStorage.setItem( "prodactContact"     ,  JSON.stringify(prodactList)  )

  displayData()

  addBtn.classList.remove("d-none");
  updBtn.classList.add("d-none");
  clear()

}


function validatinInput(    element    ,    msgId         ){

  var regex = { 
    productName :/^[a-zA-Z][a-zA-Z0-9]{2,19}$/,
    productprice :/^\d{1,20}(\.\d{1,2})?$/,
    productCategary :/^(tv|mobile|taplet|screens|electronic)$/i,
    productDescription :/^.{3,}$/m,
    productImage :/^.{1,}\.(jpg|png|avif|jpeg|svg)$/,
  };

  var text = element.value;
  var msg = document.getElementById(msgId)

  if (regex[element.id].test(text)) {
    element.classList.add("is-valid")
    element.classList.remove("is-invalid")
    msg.classList.add("d-none")
    return true

  } else {
    element.classList.add("is-invalid")
    element.classList.remove("is-valid")
    msg.classList.remove("d-none")
    return false

  }
}






















/*



function validationName(){
  var regex = /^[a-zA-Z][a-zA-Z0-9]{2,19}$/;
  var text = productNameInput.value;
  var msgName = document.getElementById("msgName")

  if (regex.test(text)) {
    productNameInput.classList.add("is-valid")
    productNameInput.classList.remove("is-invalid")
    msgName.classList.add("d-none")
    return true

  } else {
    productNameInput.classList.add("is-invalid")
    productNameInput.classList.remove("is-valid")
    msgName.classList.remove("d-none")
    return false

  }
}
function validationPrice(){

  var regex = /^\d{1,20}(\.\d{1,2})?$/;
  var text = productpriceInput.value;
  var msgprice = document.getElementById("msgprice");

  if (regex.test(text)) {
    
    productpriceInput.classList.add("is-valid")
    productpriceInput.classList.remove("is-invalid")
    msgprice.classList.add("d-none");
    return true

  } else {
    productpriceInput.classList.add("is-invalid")
    productpriceInput.classList.remove("is-valid")
    msgprice.classList.remove("d-none");
    return false
  }

}
function validationCategary(){
  var regex = /^(tv|mobile|taplet|screens|electronic)$/i;
  var text = productCategaryInput.value;
  var msgCategary = document.getElementById("msgCategary");

  if (regex.test(text)) {
    
    productCategaryInput.classList.add("is-valid")
    productCategaryInput.classList.remove("is-invalid")
    msgCategary.classList.add("d-none")
    return true
    
  } else {
    
    productCategaryInput.classList.add("is-invalid")
    productCategaryInput.classList.remove("is-valid")
    msgCategary.classList.remove("d-none")
    return false
  }
}
function validationDescription(){
  var regex = /^.{3,}$/m;
  var text = productDescriptionInput.value;
  var msgDescription = document.getElementById("msgDescription");

  if (regex.test(text)) {
    productDescriptionInput.classList.add("is-valid")
    productDescriptionInput.classList.remove("is-invalid")
    msgDescription.classList.add("d-none")
    return true
    
  } else {
    productDescriptionInput.classList.add("is-invalid")
    productDescriptionInput.classList.remove("is-valid")
    msgDescription.classList.remove("d-none")
    return false

  }
}
function validatinImage(){

  var regex = /^.{1,}\.(jpg|png|avif|jpeg|svg)$/;
  var text = productImageInput.value;
  var msgImag = document.getElementById("msgImag");

  if (regex.test(text)) {
    productImageInput.classList.add("is-valid")
    productImageInput.classList.remove("is-invalid")
    msgImag.classList.add("d-none")
    return true

    
  } else {
    productImageInput.classList.add("is-invalid")
    productImageInput.classList.remove("is-valid")
    msgImag.classList.remove("d-none")
    return false
  }


}
*/
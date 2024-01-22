const data = users;
const dataSize = users.length;

console.log(data);

const contactList = document.getElementById("contact-list")
const paginationDiv = document.getElementById("pagination")

// set total
document.getElementById('total').innerHTML = `Total: ${dataSize}`
// find page count
const pageLimit = 10;
const pageCount = Math.ceil(dataSize/pageLimit)
console.log(pageCount);

// generate page numbers
let innerHTMLPaginationDv =""
for(let i =1;i<=pageCount;i++){
    innerHTMLPaginationDv += `<li> <a onclick='getPageDetails(${i})'>${i}</a> </li>`
}
paginationDiv.innerHTML = innerHTMLPaginationDv;
getPageDetails(1)


function getPageDetails(n){
    let innerHTML ="";
    const requestedPageNum = n
    const endIndex = requestedPageNum*pageLimit;
    const startIndex = endIndex-pageLimit;

    for(let i =startIndex; i<(endIndex); i++){
        if(data[i]!=undefined){
            const name = data[i].name
            const email = name.replace(' ','.');
        innerHTML += 
        `<li class="contact-item cf">
        <div class="contact-details">
            <img class="avatar" src="${data[i].image}">
            <h3>${name}</h3>
            <span class="email">${email}@example.com</span>
        </div>
        <div class="joined-details">
               <span class="date">Joined ${data[i].joined}</span>
        </div>
        </li>`
        }

    }
    contactList.innerHTML = innerHTML;
   
}

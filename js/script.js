// QUESTION 1
const cat = {
    complain: function () {
        console.log("Meow!");
    }
}

cat.complain();



// QUESTION 2
const heading = document.querySelector("h3")

heading.innerHTML = "Updated heading";



// QUESTION 3
heading.style.fontSize = "2em";



// QUESTION 4
heading.classList.add("subheading");



// QUESTION 5 
const paragraphs = document.querySelectorAll("p");

for(let i = 0; i <paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}



// QUESTION 6
var resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>"; 
resultsContainer.style.backgroundColor = "yellow";



// QUESTION 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


function listOfNames(list) {

    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

listOfNames(cats);



// QUESTION 8
function createCats(catList) {

    let html = "";

    for (let i = 0; i < catList.length; i++) {
       
        let displayAge = "Age unknown";

        if (catList[i].age) {
            displayAge = cats[i].age;
        }

        
        html += `<div>
                    <h5>${catList[i].name}</h5>
                    <p>Age: ${displayAge}</p>
                </div>`


    }

    return html;

}

const newHTML = createCats(cats);

const container = document.querySelector(".cat-container");
container.innerHTML = newHTML;
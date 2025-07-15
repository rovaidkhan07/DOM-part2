//let heading = document.getElementById("heading"); 
//console.log(heading);

// let heading = document.getElementsByClassName("heading");
// console.dir(heading);  
// console.log(heading);

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " - Updated Text";

let divs = document.querySelectorAll(".box");

let idx = 1;
for ( div of divs) {
    div.innerText = 'new unique Box ${idx}';
    idx++;
}
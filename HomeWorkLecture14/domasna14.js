
// 1.0
function addRows() {
    let table = document.getElementById("myTable");


    let  row1 = table.insertRow(-1);
    let  row2 = table.insertRow(-1);

   
    let  cell1 = row1.insertCell(0);
    let  cell2 = row1.insertCell(1);
    let  cell3 = row2.insertCell(0);
    let  cell4 = row2.insertCell(1);


    cell1.innerHTML = "Zdravko 1, zdravko 2";
    cell2.innerHTML = "Zdravko 1, zdravko 2";
    cell3.innerHTML = "Zdravko 1, zdravko 2";
    cell4.innerHTML = "Zdravko 1, zdravko 2";

    table.style.border = "1px solid black";
    table.style.backgroundColor = "red";
    cell1.style.backgroundColor = "green"; 
    cell2.style.backgroundColor = "yellow"; 
    cell3.style.backgroundColor = "blue";
    cell4.style.backgroundColor = "gray";
    document.getElementById("r1").style.backgroundColor = "blue";
    document.getElementById("r2").style.backgroundColor = "yellow";
    document.getElementById("r3").style.backgroundColor = "brown";
    document.getElementById("r4").style.backgroundColor = "orange";

}

// 2.0
document.getElementById("zp1").style.color = "orange";
document.getElementById("zp2").style.color = "green";
document.getElementById("zp3").style.color = "gray";
document.getElementById("zp4").style.color = "yellow";



// 3.0 so for ili id - getElementById

  const liElements = document.querySelectorAll('#myList li');
 for (let i = 0; i < liElements.length; i++) {
     liElements[i].style.backgroundColor = 'red';
   }

//   document.getElementById("myList").style.backgroundColor = "red";


// 4.0
let  submit = document.querySelector('#zpp');
submit.addEventListener('click', function(event){
    event.preventDefault(); 
    
    const firstNameInput = document.querySelector('#first-name');
    const lastNameInput = document.querySelector('#last-name');
    
    console.log('First Name:', firstNameInput.value);
    console.log('Last Name:', lastNameInput.value);
  });
// TUKA pravev na drug nacin ama ne mi iskoci!!!
// let text1 = document.getElementById('first-name');
// let text2 = document.getElementById('last-name');
// let btn1  = document.getElementById('zpp');

// function fun1(){
//     btn1.innerHTML = text1.value;
//     btn1.innerHTML = text2.value;
// }
// btn1.addEventListener('click', fun1);


// 4.1 BONUS

document.getElementById("zp1").innerHTML = "zdravkoSmena";



















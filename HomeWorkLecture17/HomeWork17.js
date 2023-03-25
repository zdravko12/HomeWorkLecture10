


 

// 1.0
function validateForm(){

    let name1 = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let phone = document.getElementById("phone");
    let date = document.getElementById("date");
    let number = document.getElementById("number")

   let formValid = true;

   if(!name1.checkValidity()){
       document.getElementById("nameError").textContent = name1.validationMessage;
       formValid = false;
   }else{
       document.getElementById("nameError").textContent = "";
   }

   if(!email.checkValidity()){
       document.getElementById("emailError").textContent = email.validationMessage;
       formValid = false;
   }else{
       document.getElementById("emailError").textContent = "";
   }
   

   if(!password.checkValidity()){
       document.getElementById("passwordError").textContent = password.validationMessage;
       formValid = false;
   }else{
       document.getElementById("passwordError").textContent = "";
   }

   if(!phone.checkValidity()){
       document.getElementById("phoneError").textContent = phone.validationMessage;
       formValid = false;
   }else{
       document.getElementById("phoneError").textContent = "";
   }

   if(!date.checkValidity()){
       document.getElementById("dateError").textContent = date.validationMessage;
       formValid = false;
   }else{
       document.getElementById("dateError").textContent = "";
   }
   if(!number.checkValidity()){
       document.getElementById("numberError").textContent = number.validationMessage;
       formValid = false;
   }else{
       document.getElementById("numberError").textContent = "";
   }

   return formValid;


}

// 2.0


let age = prompt("Vnesi gi godinite:");
localStorage.setItem("age", age);

let name = prompt("Vnesi go Celosno Ime i Prezime:");
    document.cookie = "name=" + name + ";";
   localStorage.setItem("name", name);
  
   let storedAge = localStorage.getItem("age");
   let storedName = localStorage.getItem("name");

// 3.0

function fetchFiles(file1, file2) {
 


   fetch(file1)
   .then(response => response.text())
   .then(data1 =>{
       fetch(file2)
       .then(response => response.text())
       .then(data2 =>{
           if(data1.length >= data2.length){
               console.log(data1)
              
               
               
           }else{
               console.log(data2)
               
           }

       })



   });
   
}


fetchFiles("./readme.txt", "./readmee.txt")
 
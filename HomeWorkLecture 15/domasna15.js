



// 1.0

let form = document.getElementById("Form");

// stavam style
document.getElementById("Form").style.border = "1px solid black";
document.getElementById("Form").style.width = "170px";
document.getElementById("Form").style.height = "220px";
document.getElementById("bb").style.margin = "50px";


form.addEventListener("submit", function(event){
    
    let ime1 = document.getElementById("ime1").value;
    let ime2 = document.getElementById("ime2").value;
    let ime3 = document.getElementById("ime3").value;
    
    
    if(!ime1 || !ime2 || !ime3){
        alert("error with login");
    }else{
        alert("ok");
    }

});

// 2.0

document.getElementById("Form1").style.border = "1px solid black";
document.getElementById("Form1").style.width = "170px";
document.getElementById("Form1").style.height = "376px";
document.getElementById("bb1").style.margin = "50px";
document.getElementById("errorName1").style.color = "red";
document.getElementById("errorName2").style.color = "red";
document.getElementById("errorName3").style.color = "red";
document.getElementById("errorName4").style.color = "red";



let  fields = document.querySelectorAll("input[type='text']");
fields.forEach(function(field) {
  field.addEventListener("blur", function(event) {
    let value = event.target.value;
   let errorSection = event.target.nextElementSibling;

    if (!value) {
      errorSection.textContent = "It's not correct";
    } else {
      errorSection.textContent = "";
    }
    
  });
});

// 3.0

   window.onload = function(){
    let button =  document.getElementById('buttonz');
    let  resetButton = document.getElementById("reset");

    let count = 0;

    button.addEventListener('click', function(){
        count++
        console.log(count);

    });
    resetButton.addEventListener('click', function(){
        count = 0;
        console.log('0');

    });
}

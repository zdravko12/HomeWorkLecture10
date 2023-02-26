
// 1.0
let par1 = 1;
let par2 = 1;
let par3 = 2; 


function parame( par1, par2, par3){
    if(par1 === par2 && par1 === par3 && par2 === par1 && par2 === par3 && par3 === par1 && par3 === par2 ){
        return true;
    }
    else if(par1 === par2 || par1 === par3 || par2 === par1 || par2 === par3 || par3 === par1 || par3 === par2 ){
        return true;
    }
    else{
        return false;
    }
}
console.log(parame(par1, par2));
console.log(parame(par1, par3));
console.log(parame(par2, par1));
console.log(parame(par2, par3));
console.log(parame(par3, par1));
console.log(parame(par3, par2));

//1.1 bonus
let num1 = 9;
let num2 = 4;
let num3 = "4"; 



function parame1(num1,num2,num3){
    if(num1 === num2 || num1 === num3 ||  num2 === num3 ){
        return true;
    }else if(String(num1) === String(num2) || String(num1) === String(num3) || String(num2) === String(num3)){
        return true;
    }else{
        return false;
    }
}

console.log(parame1(num2, num3));
console.log(parame1(num1, num2));
console.log(parame1(num1, num3));


// 2.0


let mesec = prompt("napisi go mesecot od 1-12:");
if(mesec == 2 ){
    let godina = prompt("napisi ja godinata: ");
    if(godina >= 2024){
        alert(" prestapna e(29 dena)");
    }else if(godina <= 2020){
        alert("prestapna e(29 dena)");
    }else if(godina <= 2023){
        alert("ne e prestapna (28 dena)");
    }else{
        alert("");
    }
}
if(!isNaN(mesec) && mesec == 1 && mesec == 1){
    alert("Januari");
}else if(!isNaN(mesec) && mesec == 2 && mesec == 2){
    alert("Februari");
}else if(!isNaN(mesec) && mesec == 3 && mesec == 3){
    alert("Mart");
}else if(!isNaN(mesec) && mesec == 4 && mesec == 4){
    alert("April");
}else if(!isNaN(mesec) && mesec == 5 && mesec == 5){
    alert("Maj");
}else if(!isNaN(mesec) && mesec == 6 && mesec == 6){
    alert("Juni");
}else if(!isNaN(mesec) && mesec == 7 && mesec == 7){
    alert("Juli");
}else if(!isNaN(mesec) && mesec == 8 && mesec == 8){
    alert("Avgust");
}else if(!isNaN(mesec) && mesec == 9 && mesec == 9){
    alert("Septemvri");
}else if(!isNaN(mesec) && mesec == 10 && mesec == 10){
    alert("Oktomvri");
}else if(!isNaN(mesec) && mesec == 11 && mesec == 11){
    alert("Noemvri");
}else if(!isNaN(mesec) && mesec == 12 && mesec == 12){
    alert("Dekemvri");
}else{
   console.log("");
}

    

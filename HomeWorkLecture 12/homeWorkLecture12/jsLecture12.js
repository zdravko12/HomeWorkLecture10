// 1.0
let numS = [1, 2, 3, 4, 5 ];
numS.splice(1, 1);
console.log(numS);

function nre(par1, par2){
    const num1 = par1.indexOf(par2);
    if (num1 > -1);{
        par1.splice(num1, 1);

    }
    return par1;
   



}
const newNum = [1, 2, 3, 4, 5 ];
const par2 = 2;
const newNum1 = nre(newNum, par2);
console.log(newNum1);
    

// 2.0
let numbe1 = "124141412414";
let number = "123125";
function newL(number) {
    return number.length;
  }
  console.log(number.length);

  const test1 = [1,2,3,4,5,6,7,8,9,10]; 
console.log(test1.length);
console.log(numbe1.length);

let numbe2 = [1,2,3,4,3,4];     

for(let i = 0; i < numbe2.length; i++){
    console.log(numbe2.length);
}



// 3.0

let numb = [200,1233,899,2,123,390];
function getMax(arr){
    let max = arr[0];
    for(item of arr){
        if(item > max){
            max = item;
        }
    }
    return max;
}
console.log(getMax(numb));
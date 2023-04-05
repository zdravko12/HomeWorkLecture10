
document.getElementById("demo").innerHTML = "HomeWorkLecture19";
document.getElementById("demo").style.textAlign =  "center";
document.getElementById("demo").style.color = "blue";

// 1.0

let person = {
    name: "Novak",
    surname: "Djokovic",
    age: 36,
    work: "tennis",
    set fullName(name){
        return(person.name = name);
     
    },
    get  birthYear(){
        return new Date().getFullYear() - this.age
    },
    set ATPRankings(points){
        return (person.points = points)
    }
}

console.log(person.birthYear);
console.log(person.fullName = "Novak Djokovic");
console.log(person);


let arr =  objectToArray(person);
console.log(arr);

function objectToArray(obj) {
    return Object.entries(obj)
      .filter(([key, value]) => typeof value !== "function")
      .map(([key, value]) => ({ key, value }));
  }

// 2.0

let arr1 = [{key: 'name', value: 'Novak Djokovic'},
{key: 'surname', value: 'Djokovic'},
{key: 'age', value: 36},
{key: 'work', value: 'tennis'},
{key: 'fullName', value: undefined},
{key: 'birthYear', value: 1987},];

function arrayToObject(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      obj[item.key] = item.value;
    }
    return obj;
  }


  let obj = arrayToObject(arr1);
console.log(obj);

// 3.0

let obj1 = {name: "Novak", surname: "Djokovic",  age: 36, work: "tennis"};
let obj2 = {name: "Nadal", surname: "Rafael",  age: 36, work: "tennis"};

function isEqual(object1, object2){

 
  let values1 = Object.values(object1);
  let values2 = Object.values(object2);


  if(values1.length !== values2.length){
    return false;
  }
  for(let i = 0; i < values1.length; i++){
    if(values1[i] !== values2[i])
    return false;

  }

  return true;
}

console.log(isEqual(obj1, obj2)); 


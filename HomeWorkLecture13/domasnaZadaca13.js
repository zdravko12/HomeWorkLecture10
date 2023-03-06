


// 1.0

let niza = [
    {author: "Joanne Rowling",  title: "Harry Potter",  libraryID:1254},
    {author: "Megan Miranda",  title: "All the Missing Girls",  libraryID:1254},
    {author: "steve jobs", title: "Walter Isaacson", libraryID:4264},
    {author: "Bill Gates", title: "the Road Ahead", libraryID:3245},
    {author: "Suzanne Collins", title: "Mockingjay", libraryID:2545},
    
];

function Title(array) {
    array.sort(function(a, b) {
        const titleA = a.title.toUpperCase(); 
        const titleB = b.title.toUpperCase(); 
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
    
      return 0;
    });
    return array;
  }


  let sortedniza = Title(niza);

  console.log(sortedniza);

//  1.1


const author = niza.map(niza => niza.author);
console.log(author);


// 1.2
function getID(arr, libraryID) {
    return arr.filter(niza => niza.libraryID === libraryID);
  }
  const Id1254 = getID(niza, 1254);
  console.log(Id1254);


//   2.0

class car {
    constructor(brand, year, horsepower, user){
    this.brand = brand;
    this.year = year;
    this.horsepower = horsepower;
    this.properties = user;
}

CalculateAge(){
    let today = new Date;
    return today.getFullYear() - this.year;

}

canDrive(userAge) {
  if (userAge >= 25) {
    return true;
  } else if(this.horsepower <= 105) {
    return true;
  }else{
    return false;
  }
}
}




let users = [
{ fullName: "Cristiano Ronaldo", age: 38 },
{ fullName: "Lionel Messi", age: 35 },
{ fullName: "Zlatan Ibrahimović", age: 41 }

];

let cars = [
new car("bmw", 2021, 288),
new car("Mercedes-Benz", 2022, 255),
new car("Audi",  2007, 200),
];

for (let i = 0; i < users.length; i++) {
let user = users[i];
console.log(`${user.fullName} can drive:`);
for (let j = 0; j < cars.length; j++) {
  let car = cars[j];
  if (car.canDrive(user.age)) {
    console.log(`- ${car.brand} (${car.horsepower})`);
  }
}
}




































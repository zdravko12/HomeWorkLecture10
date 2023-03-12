
// 1.0



let intervalTime;
 let eTime = 0;   //staviv za  od 0 da pocne ne pocna  pp     
let paused = true;

function startTimer(){
	if(!paused){
		return;
	}
	paused = false;
	let startTimestamp = Date.now() - eTime;
	intervalTime = setInterval(() =>{
		eTime = Date.now() - startTimestamp;
		console.log(eTime);
	}, 3000);
}
function pauseTimer(){
	if(paused){
		return;
	}
	clearInterval(intervalTime);
	paused = true;
}
function stopTimer(){
	clearInterval(intervalTime);
	paused = true;
	eTime = 0;
	console.log("Stop");
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("stop").addEventListener("click", stopTimer);

// 2.0

//  tuka stavam dve(delaySeconds i count  ???)
//  function startCounting(delaySeconds, count){
//  	let count2 = 0;
// 	 setTimeout(() => {
// 		console.log("count");
// 	  }, 3000);

// }

// let start = document.getElementById("start");

// function startC(delay, count){
// 	console.log("start");
// }

// ili vaka da pocne
 function myStartdelay(){
 	console.log("start");

 }
 setTimeout(myStartdelay, 3000);




// 3.0

let url = "https://www.youtube.com/watch?v=_7rT-ixivWU";

let url1 = new URL(url);

console.log(url1.protocol);
console.log(url1.hostname);
console.log(url1.port);
console.log(url1.pathname);
console.log(url1.search);
console.log(url1.hash);

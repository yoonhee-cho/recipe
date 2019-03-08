function getJSON(path, callback) {
    var req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET', path, true);
    req.setRequestHeader('Accept', 'application/json');
    req.onload = function() {
        callback(req.response);
    };
    req.send();
}

//using inline annoymoust function
getJSON('https://icanhazdadjoke.com/', function(joke){

console.log('Got joke', joke);
});

	//1, call random joke api
	//2. print joke in html
function printJoke(jokeData) {
 var jokeEl = document.querySelector('.joke');
 jokeEl.innerText = jokeData.joke;
}

function loadRandomJoke(){
	//prevent. defualt bevior of this event//
	event.preventDefault();
	getJSON('https://icanhazdadjoke.com/', printJoke);

}

var loadJokeBtn = document.querySelector('.random-joke');


// window.setTimeout(function() {}, 3000); wait this before executing 

// var loadJokeBtn = document.querySelector('.random-joke');
// loadJokeBtn.addEventListener('click', loadRandomJoke);









// //using anamed function
// getJSON('https://icanhazdadjoke.com/', printjoke);
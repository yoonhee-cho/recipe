
'user strict';
//top of code get more predictable behavior more strict // 




var studentCount = 12;
console.log('Number of students in class: ', studentCount);

function foo (){
	var snacks = ['granola bar', 'milkshake', 'chesse puffs'];
	console.log('function foo says studentCount is: ', studentCount);
	console.log('function foo says snacks are:', snacks);

	//makes it global
	food =burger;
	//window.food = burger;
	//window is an object 
	//reason why to put var in the beginning


	function nested(){
		console.log('I am nested in function foo, and snacks are: ', snacks);
	}
}

console.log('I am outside of foo function and snacks are: ',snacks);
var arraySize = 5000000,
		loopLength = 1000;


//populate an array to chop with random numbers in ascending order
var array = [Math.round(Math.random() * 100) + 1];

for (var i = 1; i < arraySize; i++) {
	array[i] = array[i - 1] + Math.round(Math.random() * 100) + 1;
}
//select random index from test array
var index = Math.round(Math.random() * arraySize),
		value = array[index];

window.onload = function () {
	var p = document.createElement('p');
	p.innerHTML = 'Array size: ' + arraySize + '<br />index: ' + index + '<br />Searched value: ' + value;
	document.body.appendChild(p);
	
	runBenchmark('iterative chop', function() {
		var p2 = document.createElement('p');
		p2.innerHTML = 'Value returned by iterative chop: ' + chop(value, array) + '<br />number of iterations: ' + chopIterations;
		document.body.appendChild(p2);
	});
	runBenchmark('recursive chop', function() {
		var p3 = document.createElement('p');
		p3.innerHTML = 'Value returned by recursive chop: ' + recursive_chop(value, array) + '<br />recursion depth: ' +recursiveChopDepth;
		document.body.appendChild(p3);
	});
};

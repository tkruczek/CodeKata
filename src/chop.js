//iterative chop
var chopIterations = 0;
function chop(value, array) {
	var min = 0, max = array.length - 1, mid;
	do {
		mid = Math.floor((min + max) / 2);
		if (value < array[mid]) {
			max = mid - 1;
		} else {
			min = mid + 1;
		}
		//count iterations
		chopIterations++;
	} while(array[mid] !== value && min <= max);
	if (array[mid] === value) {
		return mid;
	} else {
		return -1;
	}
}
var recursiveChopDepth = 0;
function recursive_chop(value, array) {
	var mid = Math.floor(array.legth / 2);
	return (function (min, max) {
		recursiveChopDepth++;
		var mid = Math.floor((min + max) / 2);
		if (min > max) {
			return -1;
		}
		if (array[mid] === value) {
			return mid;
		}
		if (value < array[mid]) {
			max = mid - 1;
		} else {
			min = mid + 1;
		}
		return arguments.callee(min, max);
	})(0, array.length - 1);
}

function functional_chop(value, array) {
	
}

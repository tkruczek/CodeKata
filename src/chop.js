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
	//create a copy on input array to work on
	var tmpArray = array.slice(0);
	//returns the half of the input array that contains the value
	//stores the info about the start index of the returned array within input array
	//if the value is found the 'foundAd' property is set on the returned array
	function betterHalf(value, array) {
		var mid = Math.floor(array.length / 2),
				retArray = [];
		if (value == array[mid]) {
			retArray.foundAt = array.startIndex + mid;
		} else if (value < array[mid]) {
			retArray = array.slice(0, mid);
			retArray.startIndex = array.startIndex;
			retArray.foundAt = -1;
		} else if (value > array[mid]) {
			retArray = array.slice(mid + 1);
			retArray.startIndex = array.startIndex + mid + 1;
			retArray.foundAt = -1;
		}
		return retArray;
	}
	tmpArray.startIndex = 0;
	tmpArray.foundAt = -1;
	while (tmpArray.length && (tmpArray.foundAt < 0)){
		tmpArray = betterHalf(value, tmpArray);
	}
	return tmpArray.foundAt;
}
functional_chop(1, [1, 3, 5]);
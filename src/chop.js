//iterative chop
function chop(value, array) {
	var min = 0, max = array.length - 1, mid;
	do {
		mid = Math.floor((min + max) / 2);
		if (value < array[mid]) {
			max = mid - 1;
		} else {
			min = mid + 1;
		}
	} while(array[mid] !== value && min <= max);
	if (array[mid] === value) {
		return mid;
	} else {
		return -1;
	}
}

//iterative chop
function chop(needle, haystack) {
	var len = haystack.length, pos = -1,
			curLen = len;
	for (var i = 0, maxIter = index = Math.floor(len / 2); i <= maxIter; i++) {
		//needle is in the first part of current subarray
		if (needle === haystack[index]) {
			pos = index;
			break;
		} else if (needle < haystack[index]) {
			index = Math.floor((2 * index - Math.floor(curLen/2))/2);
		} else {
			index = Math.floor((2 * index + Math.floor(curLen/2))/2);
		}
		curLen = Math.floor(curLen/2);
	}
	return pos;
}

chop(5, [1, 3, 5]);

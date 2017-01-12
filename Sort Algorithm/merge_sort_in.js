function merge_sort_in(arr) {
	var len = arr.length, 
		mid = Math.floor(len/2), 
		result = [],
		i = 0,
		j = mid;
	for(var k = 0; k <= len; k++) {
		if (i > mid-1) {
			result[k] = arr[j]
			j++
		} else if (j > len) {
			result[k] = arr[i]
			i++
		} else if (arr[j] < arr[i]) {
			result[k] = arr[j]
			j++
		} else {
			result[k] = arr[i]
			i++
		} 
	}
	console.log(result)
}

var arr = ['E','E','G','M','R','A','C','E','R','T']
merge_sort_in(arr)
function shell_sort(arr) {
	var len = arr.length;
	for(var f = Math.floor(len/2);f > 0; f = Math.floor(f/2)) {
		for(var i = f; i < len; i++) {
			for(var j = i-f; j>=0 && arr[j] > arr[f+j]; j-=f) {
				var temp = arr[j]
				arr[j] = arr[f+j]
				arr[f+j] = temp
			}
		}
	}
}
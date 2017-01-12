/*
 *  归并排序函数
 */

function merge_sort(arr) {
	if(arr.length == 1) {
		return arr;
	}

	var middle = Math.floor(arr.length/2), 
		left = arr.slice(0, middle),
		right = arr.slice(middle);
	return merge(merge_sort(left), merge_sort(right));
}

function merge(left, right) {
	var result = [];
	while(left.length > 0 && right.length > 0) {
		if(left[0] < right[0]) {
			console.log('1---- result:' + result + ' left: ' + left + ' right: ' + right + ' arr:' + arr)
			result.push(left.shift())
		} else {
			console.log('2---- result:' + result + ' left: ' + left + ' right: ' + right + ' arr:' + arr)
			result.push(right.shift())
		}
	}
	console.log('3----- result:' + result + ' left: ' + left + ' right: ' + right + ' arr:' + arr)
	return result.concat(left).concat(right);
}

var arr = [5,2,4,7,1,3,2,6]
merge_sort(arr)
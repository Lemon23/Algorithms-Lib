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
			console.log('1----' + result + ' left: ' + left + ' right: ' + right)
			result.push(left.shift())
		} else {
			console.log('2----' + result + ' left: ' + left + ' right: ' + right)
			result.push(right.shift())
		}
	}
	console.log('3-----' + result)
	return result.concat(left).concat(right);
}

var arr = [2,4,6,8,3,5,7,9]
merge_sort(arr)
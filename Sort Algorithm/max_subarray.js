/*
 *  最大子数组函数
 */

function max_subarray(arr) {
	var i, temp = 0, max_sum = -Infinity;
	for(i = 0; i < arr.length; i++) {
		temp += arr[i];
		if(temp > max_sum) {
			max_sum = temp;
		}
		if(temp < 0) {
			temp = 0;
		}
	}
	return max_sum
}

var arr = [13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-4,7];
max_subarray(arr)
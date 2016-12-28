/*
 *  最大子数组-暴力破解法
 */

function max_subarray_b(arr) {
	var i, j, max_num = -Infinity;
	for(i = 0; i < arr.length; i++) {
		var cur_num = 0;
		for(j = i; j < arr.length; j++) {
			cur_num += arr[j];
			if(cur_num > max_num) {
				max_num = cur_num;
			}
		}
	}
	return max_num
}

var arr = [13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-4,7];
max_subarray_b(arr)
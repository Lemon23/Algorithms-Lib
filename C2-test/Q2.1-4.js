/*
 * 有两个各存放在数组A和B中的n位二进制整数，考虑它们的相加问题。
 * 两个整数的和以二进制形式存放在具有(n+1)个元素的数组C中。
 */

function fn() {
	var A = [1,0];
	var B = [1,0];
	var C = [];
	var d = 0;  // 余数
	var len = A.length;  // 这里先假设数组A和B的长度是一样的
	for (var i=len-1; i>=0; i--) {  // 从数组末尾元素开始计算
		key = A[i] + B[i] + d;
		if(key >=2) {  // 2进制，元素大于2要进1
			d = 1;
			C[i+1] = key - 2;
		} else {
			d = 0;
			C[i+1] = key
		}
		
	}
	C[0] = (A[0] + B[0] + d) % 2;  	// 数组C的长度+1，第二元素没有进1就用0占位

	console.log(C)
}

fn();
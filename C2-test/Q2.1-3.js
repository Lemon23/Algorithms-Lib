/*
 * 输入：一列数 A = <a1, a2,...,an> 和一个值 v
 * 输出：下标 i，使得 v = A[i]，或者当 v 不在 A 中出现时为 NIL
 */

function fn(v) {
	var arr = [4,8,2,7,5];
	for (var i = 0; i < arr.length; i++) {
		if (v == arr[i]) {
			return i;
		}
	}
	return 'NIL'
}
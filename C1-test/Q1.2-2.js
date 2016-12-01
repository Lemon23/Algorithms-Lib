/*
 * 假设我们正比较插入排序与归并排序在相同机器上的视线。
 * 对规模为n的输入，插入排序运行 8n^2 步，而归并排序运行 64nlgn 步。
 * 问：对哪些 n 值，插入排序优于归并排序？
 */

function fn() {
	var arr = []
	for(var n = 1;n<100; n++) {
		if((8*n*n)<(64*n*(Math.log(n)/Math.log(2)))) {
			arr.push(n)
		}
	}
	console.log(arr)
}
fn()
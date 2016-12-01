/*
 * n 的最小值为何值时，运行时间为 100n^2 的一个算法在相同机器上快于运行时间为 2^n 的另一个算法？
 */


function fn() {
	for(var n = 1; ; n++) {
		if((100*n*n) < (Math.pow(2, n))) {
			return n;
		};
	};
	console.log(n);
};

fn();
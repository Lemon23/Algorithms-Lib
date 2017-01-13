/*
 * BUILD-MAX-HEAP 对树中其他结点都调用一次 MAX-HEAPIFY
 * 在线性时间内把一个无序数组构造成为一个最大堆
 */

Array.prototype.buildMaxHeap = function () {
	for(var i =  Math.floor(this.length/2)-1; i >=0; i--) {
		this.maxHeapify(i, this.length);
		// console.log('buildMaxHeap---' + a)
	};
};

Array.prototype.exchange = function (i, j) {
	var tmp = this[i];
	this[i] = this[j];
	this[j] = tmp;
	// console.log('exchange---' + a)
};

Array.prototype.heapSort = function () {
	this.buildMaxHeap();
	for(var i = this.length-1; i > 0; i--) {
		this.exchange(0, i);
		this.maxHeapify(0, i);
		// console.log('heapSort---' + a)
	};
	return this;
};

/*
 * MAX-HEAPIFY 是用于维护最大堆性质的重要过程。
 * 逐级下降，使得以下标i为根结点的子树重新遵循最大堆性质
 */

Array.prototype.maxHeapify = function (i, j) {
	var largest = i;
	var left = 2 * i + 1;
	var right = 2 * i + 2;
	if(left < j && this[largest] < this[left]) {
		largest = left;
	};
	if(right < j && this[largest] < this[right]) {
		largest = right;
	};
	if(largest != i) {
		this.exchange(i, largest);
		this.maxHeapify(largest, j);
	};
};

var a = [16,4,10,14,7,9,3,2,8,1];
a.heapSort()
/*
 *  测试排序算法对于随机数数组的运行时间
 *  生成 100 位的随机数组，数组内每个元素为 0-100 的随机数
 */


/*
 *  插入排序的运行时间
 */
function t1(count) {
	var start = new Date();

	for(var j=0;j<count;j++) {
		function rd() {
			return Math.floor(Math.random()*100);
		}
		var arr=[];
		while(arr.length<100) {
			var aa=rd();
			var f=true;
			for(var i=0;i<arr.length;i++){
				if(arr[i]==aa){
					f=false;
					break;
				} else {
					f=true;
				}
				
			} 
			if(f) {
				arr.push(aa)
			}
		}

		function sort(arr) {
			var temp, i, j;
			  for (i = 0; i < arr.length; i++){
			    temp = arr[i];
			    j = i - 1;
			    while((j >= 0) && (arr[j] > temp)) {
			      arr[j+1] = arr[j];
			      j--;
			    };
			    if (j != i-1) {
			      arr[j+1] = temp;
			    };
			  };
		};

		sort(arr)
	}
	var end = new Date();
	var data = end.getTime() - start.getTime()
	console.log('插入排序运行时间：'+ data + ' 毫秒')

}

/*
 *  选择排序的运行时间
 */
function t2(count) {
	var start = new Date();

	for(var j=0;j<count;j++) {
		function rd() {
			return Math.floor(Math.random()*100);
		}
		var arr=[];
		while(arr.length<100) {
			var aa=rd();
			var f=true;
			for(var i=0;i<arr.length;i++){
				if(arr[i]==aa){
					f=false;
					break;
				} else {
					f=true;
				}
				
			} 
			if(f) {
				arr.push(aa)
			}
		}

		function sort(arr) {
			var temp;
		    var pos = 0;
		    for (var i = 0; i < arr.length-1; i++) {
		        pos = i;
		        for (var j = i+1; j < arr.length; j++) {
		            if (arr[j] < arr[pos]) {
		                pos = j;
		            };
		        };
		        temp = arr[i];
		        arr[i] = arr[pos];
		        arr[pos] = temp;
		    };
		};

		sort(arr)
	}
	var end = new Date();
	var data = end.getTime() - start.getTime()
	console.log('选择排序运行时间：'+ data + ' 毫秒')

}

/*
 *  希尔排序的运行时间
 */
function t3(count) {
	var start = new Date();

	for(var j=0;j<count;j++) {
		function rd() {
			return Math.floor(Math.random()*100);
		}
		var arr=[];
		while(arr.length<100) {
			var aa=rd();
			var f=true;
			for(var i=0;i<arr.length;i++){
				if(arr[i]==aa){
					f=false;
					break;
				} else {
					f=true;
				}
				
			} 
			if(f) {
				arr.push(aa)
			}
		}

		function shell_sort(arr) {
			var len = arr.length;
			for(var f = Math.floor(len/2); f > 0; f = Math.floor(f/2)) {
				for(var i = f; i < len; i++) {
					for(var j = i-f; j >= 0 && arr[j] > arr[f+j]; j-=f) {
						var temp = arr[j];
						arr[j] = arr[f+j];
						arr[f+j] = temp;
					};
				};
			};
		};

		shell_sort(arr);
	}
	var end = new Date();
	var data = end.getTime() - start.getTime()
	console.log('希尔排序运行时间：'+ data + ' 毫秒')

}



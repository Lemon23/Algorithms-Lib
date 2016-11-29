function selection_sort(arr) {
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

function insert_sort(arr) {
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

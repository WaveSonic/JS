let arr = new Array('str', 1.23, 7, false);
for (let i=0; i<arr.length; i++){
    document.write(arr[i] + '<br />');
}

arr = new Array();
for(i = 0; i<10; i++){
    arr[i] = i * 3;
    document.write(arr[i] + '<br />');
}

let summ = 0;
for(i = 0; i<arr.length; i++){
    summ += arr[i];
}

document.write(summ/arr.length)
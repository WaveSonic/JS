let arr_1 = new Array();
let arr_2 = new Array();
let arr_3 = new Array();
for (let i = 0; i<5; i++) arr_1[i]=i;
for (let i = 0; i<10; i++) arr_2[i]=i;
for (let i = 0; i<15; i++) arr_3[i]=i;

let arr = new Array(arr_1, arr_2, arr_3);

for (let x=0; x<arr.length; x++){
    for (let y=0; y<arr[x].length; y++){
        document.write(arr[x][y] + '<br/>')
    }
    document.write('<br/>')
}
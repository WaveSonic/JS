for (var i = 0; i < 10; i++){
    if (i % 3 == 0) continue;
    if (i == 8) break;
    document.write(i + "<br/>");
}

let x = 0;
while(x < 10){
    document.write(x + "<br/>");
    x++; 
}

let y = 1000
do {
    document.write(y+ "<br/>");
}while(y<100);

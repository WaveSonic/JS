let global = 12;
let l = 10;

function test (){
    global ++;
    let l = 5;
}

test();
document.write('Global -' + global + ", variable i - "+ l)
            let x = 5;
            let y = 4;
            
            if (x > y){
                document.write("x > y");
            }else if (x == y){
                document.write("x = y");
            }else{
                document.write("x < y");
            }
            document.write('<br/>');

            let bool = false;
            if ((x > y) & !bool){
                document.write("OK")
            }
            document.write('<br/>');

            


            let result = 6;
            switch(result){
                case 1: document.write('result = 1'); break;
                case 2: document.write('result = 2'); break;
                case 3: document.write('result = 3'); break;
                case 4: document.write('result = 4'); break;
                case 5: document.write('result = 5'); break;
                default: document.write('result not found');
            }
            document.write('<br/>');


            x > y ? document.write('Yes') : document.write('No');
            
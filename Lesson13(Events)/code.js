function buttonClick (button){
    alert("Вы нажали на кнопку. Кнопка имеет имя "+ button.name + " Также value равно "+ button.value + ".");
}

function load (){
    alert('Page load')
}

let counter = 0;
function OnMouseCounter(element){
    counter ++;
    element.innerHTML =  "На этот текст было наведено " + counter +" раз"
}
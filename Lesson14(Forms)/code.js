function valid (form){
    let name = form.name.value;
    let fail = false;
    let password = form.password.value;
    let RePassword = form.RePassword.value;
    let state = form.state.value;
    let email = form.email.value;

    let adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+|.[a-z]{2,5}/i;

    if(name == "" || name == " "){
        fail = 'Вы не ввели свое имя'
    }else if(adr_pattern.test(email) == false){
        fail = 'Вы не ввели email не правилно'
    }else if(password == ''){
        fail = 'Вы не ввели пароль'
    }else if(password != RePassword){
        fail = 'Пароли не совпвдают'
    }else if(state == ''){
        fail = 'Вы не вказали пол';
    }

    if (fail){
        alert(fail);
        return false;
    }else{
        alert("Hello, "+ name + '!');
        window.location = 'http://google.com';
    }
}
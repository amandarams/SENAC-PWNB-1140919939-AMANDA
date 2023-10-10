function login() {
    var email= document.getElementById('email').value;
    var password = document.getElementById('email_login').value;


    if (email === 'exemplo@exemplo.com' && password === 'senha') {
        alert('Login feito com sucesso, Seja Bem vindo(a) a TechPlace!');

    } else {
        alert('Falha ao efetuar o login, cheque suas informações');
    }
}
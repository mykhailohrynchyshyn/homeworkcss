document.querySelector('.login-form input[type=submit]')
    .addEventListener('click', login);
function login(e) {
    e.preventDefault();
    fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            name: document.querySelector('.login-form input[name=name]').value,
            password: document.querySelector('.login-form input[name=password]').value
        })
    })
    .then(_ => document.querySelector('.login-form').reset());
}

let visible = true;
function showFun() {
    if(visible) {
        document.getElementById('iphone2' ).style.display = 'none';
        visible = false;
    } else {
        document.getElementById('iphone2' ).style.display = 'block';
        visible = true;
    }
}
document.getElementById('button').onclick = showFun;

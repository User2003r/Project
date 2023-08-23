


let pass = document.getElementById('password');
document.getElementById('eyeicon').addEventListener('click', () => {

    if (pass.type == 'password') {
        pass.type = 'text';
        document.getElementById('eyeicon').setAttribute('class', 'fa fa-eye');
    }
    else {
        pass.type = 'password';
        document.getElementById('eyeicon').setAttribute('class', 'fa fa-eye-slash')
    }
})

//login page code
document.getElementById('login-btn').addEventListener('click', (e) => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    e.preventDefault();
    if (username == '' && password == '' || password != '' && username == '' || username != '' && password == '') {
        document.getElementById('error').textContent = "All fields are required"

    }
    else {
        let xhr = new XMLHttpRequest;
        xhr.open('GET', 'http://localhost:8080/users')
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let result = JSON.parse(xhr.responseText);
                console.log(result);
                for (let i = 0; i < result.length; i++) {
                    if (result[i].username == username && result[i].password == password) {
                        window.location.href = 'http://127.0.0.1:5501/index.html'
                        window.localStorage.setItem('flag', '1')
                        window.localStorage.setItem('name', result[i].name);
                        window.localStorage.setItem('email', result[i].email);
                        window.localStorage.setItem('username', result[i].username);
                    }
                }
            }
        }
        xhr.send();
    }

})

document.getElementById('createacc').addEventListener('click', () => {
    document.getElementById('login').style.display = 'none'
    document.getElementById('registration').style.display = 'flex';
})


// Registration Form Code

let flex = () => {
    document.getElementById('login').style.display = "flex"
}

const registration = () => {
    document.getElementById('registration').style.display = 'none'
}
document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    console.log("click")


    let name = document.getElementById('name').value;

    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;
    let username = document.getElementById('user').value;
    console.log(password)
    console.log(email)
    console.log(username)
    console.log(name)
    const obj = {
        name: name,
        email: email,
        password: password,
        username: username
    }
    if (name != '' && password != '' && username != '' && email != '') {



        let xhr = new XMLHttpRequest;
        xhr.open('POST', 'http://localhost:8080/users')
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let data = JSON.parse(xhr.responseText);
                console.log(data);
            }
        }
        // xhr.send(JSON.stringify(obj))
        document.getElementById('user_error').textContent = "Registered Successfully"
        setTimeout(flex, 1500)
        setTimeout(registration, 1500)
    }
    else {
        document.getElementById('user_error').textContent = "All fields are required"
    }





})


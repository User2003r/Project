let fun = (input) => {


    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://ecommerce-product-api1.p.rapidapi.com/data?product=${input}&page=1`);
    xhr.setRequestHeader('X-RapidAPI-Key', '6e7677fd4amsh0d75d2ccce63862p1f9884jsnfb1f3178a15a');
    xhr.setRequestHeader('X-RapidAPI-Host', 'ecommerce-product-api1.p.rapidapi.com');

    xhr.onreadystatechange = () => {
        let result
        if (xhr.readyState == 4 && xhr.status == 200) {
            result = JSON.parse(xhr.responseText);
            console.log(result)
            let output = ''
            let description = ''

            for (let i = 0; i < 15; i++) {
                output += `<div class="main-box">
                <div id="box-left">
                    <img src="${result[i].image}">
                </div>
                <div id="box-right">
                    <div id="content"><a class = "anchor" href="${result[i].anchor}"><h2 id="title">${result[i].title}</h2></a>
                        <h3 id="price">Price: ${result[i].price}</h3>
                        <p id="description"><b>Description:</b> ${result[i].description}</p></div>
                </div>
            </div>`




            }
            document.getElementById('main').innerHTML = output;




        }
    }
    xhr.send();
}

let display = () => {
    document.getElementById('sidebar').style.display = 'none'

}


fun('Samsungs20')
document.getElementById('search').addEventListener('click', () => {
    let input = document.getElementById('searchfield').value;
    fun(input);
})

document.getElementById('profileimg').addEventListener('click', () => {


    document.getElementById('sidebar').style.right = '0px';
    document.getElementById('sidebar').style.display = 'block';
    setTimeout(display, 3000)
})

document.getElementById('loginbtn').addEventListener('click', () => {
    window.location.href = "http://127.0.0.1:5501/login.html"
})

let flag = window.localStorage.getItem('flag');
if (flag == '1') {
    document.getElementById('loginbtn').style.display = 'none';
    document.getElementById('profileimg').style.display = 'block'
    document.getElementById('logout').style.display = "block"
}

let name = window.localStorage.getItem('name');
let email = window.localStorage.getItem('email');
let username = window.localStorage.getItem('username');

document.getElementById('user_name_show').textContent = name;
document.getElementById('user_useremail').textContent = email;
document.getElementById('user_username').textContent = username;

document.getElementById('logout').addEventListener('click', () => {
    window.localStorage.removeItem('flag')
    window.localStorage.removeItem('name');
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('username');

    window.location.href = "http://127.0.0.1:5501/index.html"
})








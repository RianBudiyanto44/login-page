const password_input = document.querySelector("#password");
const klik = document.querySelector("#icon");

klik.addEventListener('click', (e) => {
    e.preventDefault();

    if (password_input.type === 'password') {
        password_input.type = 'text';
        klik.src = "image/hidden.png";
    } else {
        password_input.type = 'password';
        klik.src = "image/view 1.png";
    }
})
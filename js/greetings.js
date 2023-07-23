const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form")
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY= "USERNAME_KEY"

function onLoginSubmit(event){
    event.preventDefault();
    const USERNAME_KEY = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME)
    console.log(USERNAME_KEY)
    localStorage.setItem("username",USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `Hello ${USERNAME_KEY}`;
}

loginForm.addEventListener("submit", onLoginSubmit)

const savedUername = localStorage.getItem(USERNAME_KEY)

if (savedUername == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${USERNAME_KEY}`;
}
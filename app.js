const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); //기본동작 금지
    loginForm.classList.add(HIDDEN_CLASSNAME); // 다시 숨길거야
    const username = loginInput.value; //loginInput.value를 username에 넣기
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    //h1에 입력한 값 넣어주기. = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    //"hidden"이라는 class 제거하기
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
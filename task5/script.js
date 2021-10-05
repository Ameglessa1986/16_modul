
let userName = localStorage.getItem("userName");
let visitDate = localStorage.getItem("date")

if (userName == undefined) {
    userName = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя")
}
    else {
    alert(`Добрый день, ${userName}! Давно не виделись. В последний раз вы были у нас ${visitDate}.`)

};

const currentDate = new Date();
localStorage.setItem("userName", userName);
localStorage.setItem("date", 
`${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()} ${currentDate.getHours()}:${('0' + currentDate.getMinutes()).slice(-2)}`)
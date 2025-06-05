//Завдання
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

const emailPattern = /^[a-z0-9]+(\.[a-z0-9]+)?@(gmail|yahoo)\.com$/i;
//
const validEmails = arr.filter(item => emailPattern.test(item.email)); //Фільтруємо масив — залишаємо лише ті об'єкти, де email відповідає завданню
console.log(validEmails); //виводемо у консоль масив з довіреними email-адресами
//виведе: test.test@gmail.com та dmitro.porohov@yahoo.com

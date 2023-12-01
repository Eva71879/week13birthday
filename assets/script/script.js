const input = document.querySelector('.input');
const invalidDate = document.querySelector('.invalidDate');
const daysLeft = document.querySelector('.daysLeft');

function setMaxDate (){
let today = new Date();
let day = today.getDate();
let month = today.getMonth()+1;
let year = today.getFullYear()+1;

if (day < 10) {
    day = '0' + day;
}
if (month < 10) {
    month = '0' + month;
}
today = year + '-' + month + '-' + day;
input.setAttribute('max', today);
}
setMaxDate();

function countDaysLeft () {
    if (input.value) {
        invalidDate.style.opacity = 0;

        let choosedDate = new Date(input.value);
        let difference = Math.ceil(((choosedDate - new Date()) / 1000 / 3600 /24));
        let x = 0;
        if (difference < 100) {
            x = difference;
        } else if (difference >= 100 && difference < 200) {
            x = difference - 100;
        } else if (difference >= 200 && difference < 300) {
            x = difference - 200;
        } else if (difference >= 300) {
            x = difference - 300;
        }

        if (x === 1 && x !==11) {
            daysLeft.textContent = `До вашего дня рождения осталось ${difference} день.`;
        } else if (x === 2 || x === 3 || x === 4 && x !== 12 && x !==13 && x !==14) {
        daysLeft.textContent = `До вашего дня рождения осталось ${difference} дня.`;
        } else {daysLeft.textContent = `До вашего дня рождения осталось ${difference} дней.`;
        }
    } else {
        invalidDate.style.opacity = 1;
    }
}

const button = document.querySelector('.button');
document.querySelector('.button').onclick = countDaysLeft;



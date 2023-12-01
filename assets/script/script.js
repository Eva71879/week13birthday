const input = document.querySelector('.input');
const invalidDate = document.querySelector('.invalidDate');
const daysLeft = document.querySelector('.daysLeft');
const wordDeclension = document.querySelector('.wordDeclension');



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
            daysLeft.textContent = `${difference} день`;
        } else if (x === 2 || x === 3 || x === 4 && x !== 12 && x !==13 && x !==14) {
        daysLeft.textContent = `${difference} дня`;
        } else {daysLeft.textContent = `${difference} дней`;
        }
    } else {
        invalidDate.style.opacity = 1;
    }
}

const button = document.querySelector('.button');
document.querySelector('.button').onclick = countDaysLeft;



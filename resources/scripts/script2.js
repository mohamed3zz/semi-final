const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const number = document.querySelector(".number");
let num = 0;

plus.addEventListener("click", () => {
    num++;
    if (num < 10) {  
        number.innerText = "0" +num;
    }
    else {
        number.innerText = num
    }
});
minus.addEventListener("click", () => {
    if (num > 1) {
        num--;
        if (num < 10) {  
            number.innerText = "0" +num;
        }
        else {
            number.innerText = num
        }
    }
})
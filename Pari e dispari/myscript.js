let submit = document.getElementById("submit");
let userNum = document.getElementById("userNumber");
let userEvenOdd = document.getElementById("pariDispari");
let winner = document.getElementById("winner");
let outputSum = document.getElementById("sum");
let sum = 0;

submit.addEventListener("click",
    function() {
        let CPUnum = getRandomNum(1, 5);
        console.log(userNum.value);

        sum = parseInt(userNum.value) + CPUnum;
        outputSum.innerHTML = `La somma è ${sum}`;

        if (isEvenOdd(sum) == userEvenOdd.value) {
            console.log("L'utente ha vinto");
            winner.innerHTML = "L'utente ha vinto."
        }else {
            console.log("Il computer ha vinto");
            winner.innerHTML = "Il computer ha vinto."
        }
    }
);

//ritorna un numero intero casuale da a
function getRandomNum(from,to) {
    return parseInt(Math.floor(Math.random() * to) + from);
}

//ritorna even se è pari, altrimenti ritorna odd
function isEvenOdd(n) {
    let result = "odd";

    if (n % 2 == 0) {
        result = "even";
    }
    return result;
}
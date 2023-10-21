const colors = ["green","red", "rgba(133, 122, 200)","#f15025"];
const letras = ["a", "b","c", "d", "e", "f", "a", "b", "c"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
let colorHex = "";
let ramdomizer;
let numeroRamdom;

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = (`#${colorHex}`); 
    color.textContent = (`#${colorHex}`);
    colorHex = "";
})
function getRandomNumber() {
    for(let i = 0; i < 6; i++){
        numeroRamdom = Math.floor(Math.random()* 9);
        ramdomizer = Math.floor(Math.random()* 2);
        if(ramdomizer === 1){
            colorHex += numeroRamdom;
        }else if(ramdomizer === 0){
            colorHex += letras[numeroRamdom];
        }
    }
}

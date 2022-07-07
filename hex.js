const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

function randomNumber () {
    return Math.floor(Math.random() * hex.length);
}


btn.addEventListener('click', () => {
    let hexColor = '#';
    // loop 6 times because a hex is 6 
    for (let i = 0; i < 6; i++) {
        // += will add to hexColor instead of overriding
        hexColor += hex[Math.floor(Math.random() * 16)];
        console.log("hexColor: ", hexColor);
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})
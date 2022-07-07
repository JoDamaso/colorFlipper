const colors = ["green", "red", "rgba(133,122,200)"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

function randomNumber() {
    // floor rounds down to closest integer, random goes over the colors array's length
    return Math.floor(Math.random() * colors.length);
};

btn.addEventListener('click', function() {
    console.log("button works and color is changed")
    // get a random number between 0 and 2 colors[0-2]
    const random = randomNumber();
    console.log(random);

    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
});
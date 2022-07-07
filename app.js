const colors = ["green", "red", "rgba(133,122,200)"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    console.log("button works and color is changed")
    // get a random number between 0 and 3 colors[0-2]
    const random = 2;
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
})

getRandomNumber
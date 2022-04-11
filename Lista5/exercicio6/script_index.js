function generateRandomColor() {
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`
}

document.getElementById('collor_font').onclick = () => {
    document.getElementById("container").style.color = generateRandomColor()
}

document.getElementById('collor_background').onclick = () => {
    document.getElementById("container").style.backgroundColor = generateRandomColor()
}
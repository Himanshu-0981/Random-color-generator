const btn = document.querySelector('button');;
const body = document.body;
const currentColor = document.querySelector('.current-color');

function randomColorGenerator(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let rgbColor = `rgb(${red},${green},${blue})`
    return rgbColor;
}

btn.addEventListener('click',()=>{
    let randomColor = randomColorGenerator()
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor
})
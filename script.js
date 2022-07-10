horse = document.querySelector('.horse');
hx = parseInt(window.getComputedStyle(horse, null).getPropertyValue('left'));
obstacle = document.querySelector('.obstacle');
ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
hy = parseInt(window.getComputedStyle(horse, null).getPropertyValue('top'));
oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
offsetX = Math.abs(hx-ox);
offsetY = Math.abs(hy-oy);
score = 0
cross = true
document.onkeydown = function(e){
    if(e.key == "ArrowUp" && offsetX > 279){
        document.querySelector('.horse').classList.add('animateHorse');
        document.getElementById('hs').style.visibility = "hidden"
        document.getElementById('hidhorse').style.visibility = "visible"
        setTimeout(() => {
            if(offsetX >= 279 && offsetY>=58){
                document.querySelector('.horse').classList.remove('animateHorse')
                document.getElementById('hs').style.visibility = "visible"
                document.getElementById('hidhorse').style.visibility = "hidden"
            }
        }, 1100); 
    }
    else if (e.key == "ArrowRight"){
        horse = document.querySelector('.horse');
        horseX = parseInt(window.getComputedStyle(horse, null).getPropertyValue('left'));
        horse.style.left = horseX + 50 + "px";
    }
    else if (e.key == "ArrowLeft"){
        horse = document.querySelector('.horse');
        horseX = parseInt(window.getComputedStyle(horse, null).getPropertyValue('left'));
        horse.style.left = (horseX - 50) + "px";
    }

}

setInterval(() => {
    horse = document.querySelector('.horse');
    hx = parseInt(window.getComputedStyle(horse, null).getPropertyValue('left'));
    obstacle = document.querySelector('.obstacle');
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    hy = parseInt(window.getComputedStyle(horse, null).getPropertyValue('top'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    offsetX = Math.abs(hx-ox);
    offsetY = Math.abs(hy-oy);
    if(offsetX < 279 && offsetY<88 ){
        document.getElementById('obs').style.animation = "none"
        document.getElementById('bgg').style.animation = "normal"
        document.getElementById('obs').style.left = hx + 279 + "px"
        document.querySelector('.horse').classList.remove('animateHorse');
        document.getElementById('horsehalt').style.visibility = "visible";
        document.getElementById('hs').style.visibility = "hidden";
        document.getElementById('hidhorse').style.visibility = "hidden"; 
        document.querySelector('.gameover').style.visibility = "visible";
        document.getElementById('horsehalt').classList.add('animateHorse2');
        document.querySelector('.bg').style.opacity = 0.5;
        document.getElementById('obs').style.opacity = 0.5;
        document.querySelector('.scorecont').style.opacity = 0.5;
        document.getElementById('horsehalt').style.opacity = 0.5;
        setTimeout(() => {
            document.getElementById('sc').style.visibility = "visible";
            document.getElementById('horsehalt').style.visibility = "visible";
        }, 1000);
        setTimeout(() => {
            document.getElementById('horsehalt').style.visibility = "hidden";
        }, 1100);

    }
    else if(offsetX < 320 && cross && offsetX > 279){
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            document.querySelector('.obstacle').style.animationDuration = newDur + 's'
            console.log(newDur)
        }, 500);
    }
    else if(offsetX <= 279 && offsetY<88 && cross){
        score = score - 1;
        updateScore(score);
        cross = false; 
    }
}, 100);
function updateScore(score){
    document.querySelector('.scorecont').innerHTML = "Your Score: " + score
    document.getElementById('sc').innerHTML = "Your Score: " + score
}
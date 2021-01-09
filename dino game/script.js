let char = document.getElementById('char');
let block = document.getElementById('block');
let but = document.getElementById('but');
but.addEventListener('click',restart);
function jumper(){
    if(char.classList != 'anim')
    {char.classList.add('anim'); } 
    setTimeout(function () {
        char.classList.remove('anim');
    },500);
}
let checkdead = setInterval(function(){

let chartop = parseInt(window.getComputedStyle(char).getPropertyValue('top'));
let  blockleft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
if(blockleft < 30 && blockleft > 0 && chartop >= 130){
    alert('Aur bhai kaisi lagi');
    block.style.display = 'none';
    block.style.animation= 'none';

}

},10);

function restart(){
    window.location.reload();
}
const container = document.querySelector('.container')
const text =  document.querySelector('#text')

const totaltime = 7500
const breathe = (totaltime / 5) *2 
const hold = totaltime / 5
breatheanim()
function breatheanim(){
    text.innerHTML = 'Breathe';
    container.className ='container grow';
    setTimeout(() => { //set timeout performd the function after the given time.
        text.innerHTML= 'Hold';
        setTimeout(() => {
            text.innerHTML='Breathe out';
            container.classList.add ('container', 'shrink');
        },hold);

    },breathe);

}
setInterval(breatheanim,totaltime);// setinterval will repeat the function after every given milisecond 
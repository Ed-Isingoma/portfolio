let currentClassName = "intro"
function doFlip(ev) {
    if (ev.target.className == currentClassName) {
        return
    } else {
        //lights in button, if hidings div is on display
        //lights on in hidings
        document.querySelector(`.hidings .${currentClassName}`).style.display = 'none'
        document.querySelector(`.hidings .${ev.target.className}`).style.display = 'block'
        currentClassName = ev.target.className
        //lights off in hidings
    }
}
function showIntros(){
    document.querySelector('.buttonsLinks').classList.toggle('showing')
}

function introsFlip(ev){
    document.querySelector('.buttonsLinks').classList.remove('showing')
    doFlip(ev)
}
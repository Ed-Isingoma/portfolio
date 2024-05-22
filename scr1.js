let currentClassName = "intro"
function doFlip(ev) {
    if (ev.target.className == currentClassName) {
        return
    } else {
        //some lines here dont have effect on screen during mobile view
        if (currentClassName == 'intro') {
            document.querySelector('.introBox .intro').classList.remove('shimmering')
        } else {
            document.querySelector(`.hidingsTitles .${currentClassName}`).classList.remove('shimmering')
        }
        if (ev.target.className == 'intro') {
            document.querySelector('.introBox .intro').classList.add('shimmering')
        } else {
            document.querySelector(`.hidingsTitles .${ev.target.className}`).classList.add('shimmering')
        }
        document.querySelector(`.hidings .${currentClassName}`).style.display = 'none'
        document.querySelector(`.hidings .${ev.target.classList[0]}`).style.display = 'block'
        currentClassName = ev.target.classList[0]
    }
}
function showIntros(){
    document.querySelector('.buttonsLinks').classList.toggle('showing')
}

function introsFlip(ev){
    document.querySelector('.buttonsLinks').classList.remove('showing')
    doFlip(ev)
}
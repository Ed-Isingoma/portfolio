let currentClassName = "intro"
function doFlip(ev) {
    if (getComputedStyle(ev.target.parentElement).float == 'none') {
        return mobileFlip(ev)
    } else if (ev.target.className == currentClassName) {
        return
    } else {
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

function mobileFlip(ev) {
    if (ev.target.nextElementSibling.id == ev.target.classList[0]) {
        ev.target.nextElementSibling.remove()
        return
    } else {
        const targetEl = document.querySelector(`.hidings .${ev.target.classList[0]}`).cloneNode(true)
        targetEl.style.display = 'block'
        targetEl.id = targetEl.classList[0]
        ev.target.insertAdjacentElement("afterend",targetEl)
    }
}

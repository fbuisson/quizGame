const buttons = document.getElementsByClassName("btn")
const levelSelected = "";

const removeClass = (items, classTag) => {
    for( let i = 0 ; i < items.length ; i++ ){
        buttons[i].classList.remove(classTag)
    }
}

for( let i = 0 ; i < buttons.length ; i++ ){
    buttons[i].addEventListener("click", () => {
        removeClass(buttons, "active")
        buttons[i].classList.add("active")
        if ( buttons[i].classList.contains("btn-circle")) levelSelected = i === 0 ? "Facile" : i === 1 ? "Moyen" : "Difficile"
    })
}
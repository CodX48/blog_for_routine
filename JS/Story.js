let Storys = document.createElement('div')
Storys.id = 'page2'

let _story = function (){
    let text = document.createElement('h1')
    text.textContent = "story page"
    Storys.appendChild(text);
    return Storys
}

export let _story_ = _story();
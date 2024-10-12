let Mp = document.createElement('div')
Mp.id = 'page3'

let _Mp = function (){
    let text = document.createElement('h1')
    text.textContent = "Morning person page"
    Mp.appendChild(text);
    return Mp
}

export let _Mp_ = _Mp();
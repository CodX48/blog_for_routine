let Np = document.createElement('div')
Np.id = 'page4'

let _Np = function (){
    let text = document.createElement('h1')
    text.textContent = "Night person page"
    Np.appendChild(text);
    return Np
}

export let _Np_ = _Np();
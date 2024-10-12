let header = document.createElement('div');
header.className = "header";

const Header = function(){
//header img
let HeaderImg = document.createElement('img')
HeaderImg.src = 'https://i.pinimg.com/564x/e9/00/5c/e9005c830342a839b6e259be4b0c02ed.jpg';
HeaderImg.title = 'Tkanks';
header.appendChild(HeaderImg);

//header_welcome_section
let welcome_section = document.createElement('div')
welcome_section.className = 'welcome-section';
welcome_section.id = 'welcome_section';
let welcome_message = document.createElement('h1')
welcome_message.textContent = "Welcome to Routiner, Create it on your way !"
welcome_section.appendChild(welcome_message);
header.appendChild(welcome_section);

//list handle
let nav_list = document.createElement('nav');
nav_list.className = "nav-list";

let links = [{name:'Home'},{name:'Storys'},{name:'Morning Person'},{name:'Nigh person'}]

for(let i =0;i<links.length;i++){
    let a = document.createElement('a');
    let list_span = document.createElement('span')
    list_span.textContent = links[i].name;
    a.href = `#${links[i].name}`;
    a.setAttribute('data-page',`page${i + 1}`)
    a.appendChild(list_span);
    nav_list.appendChild(a);
}
header.appendChild(nav_list)
return header;
}
export let header_side = Header();

        



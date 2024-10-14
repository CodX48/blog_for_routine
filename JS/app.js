import { _home_page } from './home_page/Home.js';
import { header_side } from './header.js';
import { _story_ } from './Story.js';
import { _Mp_ } from './MP.js'; 
import { _Np_ } from './NP.js';
let pages_list = [_home_page,_story_,_Mp_,_Np_];
let container = document.createElement('div'); // Create and append main container to the body
container.className = 'main-container';

document.body.appendChild(header_side); // Append header to the body
let current_page = _home_page; // Track the currently displayed page


container.appendChild(_home_page); // Initially append home page
document.body.appendChild(container);

let header_list = document.querySelectorAll(".nav-list a"); // navigation links

header_list.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        let targetPageId = link.getAttribute('data-page'); // Get the target page id from the clicked link

        if (current_page.id === targetPageId) { // Check if the clicked page is already the current page
            return; // If it's the same page, do nothing
        }else{
            container.removeChild(current_page);
        }
        // Append new page 
        pages_list.forEach((page) =>{
            if(targetPageId === page.id){
                container.appendChild(page);
                current_page = page; // update the current page
            }
        })
    });
});



//event listener for color

header_list[0].style.color = "rgb(113, 190, 113)";
header_list.forEach((ele) =>{
    ele.addEventListener('click',function (){
         header_list.forEach((e)=>{
             e.style.color = '#0d0d0d'
             });
            ele.style.color = "rgb(113, 190, 113)";
            });
});
header_list.forEach((ele_activation) =>{
    ele_activation.addEventListener('click', function (){
        header_list.forEach((e) =>{
            e.setAttribute('activation','off');
        });
        ele_activation.setAttribute('activation','on');
    })
});

    


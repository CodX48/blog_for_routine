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


container.appendChild(_home_page); // Initially append home page
document.body.appendChild(container);




let sugg_list = document.querySelector('.sugg-div')
window.addEventListener('scroll',function (){
   if(this.window.scrollY >= 1000){
    sugg_list.classList.add('active')
   }else{
    sugg_list.classList.remove('active')
   }
});

let sugg_active_style = document.querySelectorAll('.active ul li');

sugg_active_style.forEach((ele) =>{
    ele.addEventListener('click',function (){
         sugg_active_style.forEach((e)=>{
            e.querySelector('h4').style.color = "rgba(255, 255, 255, 0.886)";
             //e.style.color = 'rgba(255, 255, 255, 0.886)'
             });
             ele.querySelector('h4').style.color = "rgb(59, 84, 59)";
            //ele.style.color = '';
            });
});


//here i will create a footer and this page will be in every singel page.
let my_acount =[{http:"https://github.com/CodX48",webName:"Git Hub"},{http:"www.linkedin.com/in/moustafa-ibrahim8",webName:"Linked In"}]
let footer = document.createElement('footer');
let footer_uper = document.createElement('div'); //logo and acounts links 
let footer_mid = document.createElement("div"); //number and mail
let footer_bot = document.createElement('div'); //my name  and copyright and a message for the visitor
footer_uper.className = "footer-upder";
footer_mid.className = "footer-mid";
footer_bot.className = "footer-bot";
//uper side 
let logo = document.createElement('h3');
logo.textContent = "Routiner";
footer_uper.appendChild(logo)
let footer_a_container = document.createElement('div');
footer_a_container.className = 'footer-a-container'
my_acount.forEach(function (ele){
    let footer_a = document.createElement('a');
    footer_a.textContent = ele.webName;
    footer_a.href = ele.http;
    footer_a.target = "_blank";
    footer_a.rel = "noopener noreferrer";
    footer_a_container.appendChild(footer_a);
});
footer_uper.appendChild(footer_a_container);

//mid-side
let footer_number = document.createElement('p');
footer_number.textContent = "+90 531 598 63 69";
footer_mid.appendChild(footer_number);
let footer_mail = document.createElement('p');
footer_mail.textContent = "mostafatur207h@gmail.com";
footer_mid.appendChild(footer_mail);
//bot-side
let footer_name = document.createElement('h3');
footer_name.textContent = "Moustafa Ibrahim";
let copy_span = document.createElement('div');
let copy_span_text = document.createElement('span');
copy_span_text.textContent = "2023 Routiner. All rights reserved By";
copy_span.appendChild(copy_span_text);
copy_span.appendChild(footer_name)
footer_bot.appendChild(copy_span);

footer.appendChild(footer_uper);
footer.appendChild(footer_mid);
footer.appendChild(footer_bot)
document.body.appendChild(footer);


    


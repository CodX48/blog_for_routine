let home_page = document.createElement('div'); //Home page

const Home = function (){
    //home
    let top_home_page = document.createElement('div')
    let bot_home_page = document.createElement('div')
    home_page.className = 'home';
    //home_page.setAttribute('data-',0);
    home_page.id = 'page1';
    
    //home top side
    top_home_page.className = "home-top-page";
    let head = document.createElement('h1')
    head.textContent = 'Routiner'
    let para = document.createElement('p') 
    para.textContent = `Routine provides a sense of freedom by establishing a 
                        framework that allows us to take control of our lives. 
                        By creating a daily rhythm, we can automate tasks that would otherwise consume mental energy,  
                        freeing our minds to focus on more meaningful pursuits. 
                        When we follow a routine, we reduce the uncertainty and chaos that often cause stress and distractions, 
                        giving us the power to manage our time efficiently. 
                        This control over our daily actions fosters discipline and consistency, 
                        enabling us to pursue long-term goals with clarity. Paradoxically, 
                        routine doesn’t confine us—it liberates us from the unpredictability of life, 
                        making us the masters of our own schedules and priorities.`;
    //intro side
    let intro = document.createElement('div')
    intro.className = 'intro-mess'
    intro.appendChild(head)
    intro.appendChild(para)
    top_home_page.appendChild(intro)

    //Why routine
    const routineBenefits = [
        {
          title: "Boosts Productivity",
          paragraph: "A well-structured routine helps reduce decision fatigue by automating daily tasks, freeing mental energy for more significant decisions."
        },
        {
          title: "Improves Focus",
          paragraph: "Having a set routine allows you to allocate time to essential tasks without distractions, improving concentration and focus."
        },
        {
          title: "Reduces Stress",
          paragraph: "Knowing what to expect each day reduces uncertainty and anxiety. Routine can provide a sense of control over your environment."
        },
        {
          title: "Builds Discipline",
          paragraph: "Repeated actions through routine foster self-discipline, which is key for long-term success."
        },
        {
          title: "Promotes Healthy Habits",
          paragraph: "Routine encourages healthy behaviors, such as exercise, proper eating, and sleep, all contributing to overall well-being."
        },
        {
          title: "Enhances Time Management",
          paragraph: "A routine helps prioritize tasks, ensuring that important activities are completed without procrastination."
        },
        {
          title: "Increases Consistency",
          paragraph: "Consistency in action often leads to success in the long term, whether in professional or personal life."
        },
        {
          title: "Supports Mental Health",
          paragraph: "A stable routine can provide emotional grounding, which is helpful for mental health."
        },
        {
          title: "Creates Momentum",
          paragraph: "Routine helps build momentum by breaking tasks into smaller, manageable steps that compound over time."
        },
        {
          title: "Fosters Growth",
          paragraph: "Routine allows individuals to set aside time for self-improvement, learning, or other forms of personal development."
        }
      ];      
    let sugg_div = document.createElement('div')
    sugg_div.className = 'sugg-div'
    let sugg_head = document.createElement('h2')
    sugg_head.textContent = 'Why?'
    let ul_sugg = document.createElement('ul');
    routineBenefits.forEach((ele)=>{
        let li_sugg = document.createElement('li')
        let title = document.createElement('h4')
        let para = document.createElement('p')
        title.textContent = ele.title;
        para.textContent = ele.paragraph;
        li_sugg.appendChild(title)
        li_sugg.appendChild(para)
        ul_sugg.appendChild(li_sugg);
    });
    sugg_div.appendChild(sugg_head);
    sugg_div.appendChild(ul_sugg);
    top_home_page.appendChild(sugg_div);

    //
    home_page.appendChild(top_home_page)
    //home bot side
    bot_home_page.className = "home-bot-page";

    let books = [{b_name:'Atomic Habits',R_name: 'James Clear',b_img: 'https://m.media-amazon.com/images/I/81F90H7hnML._AC_UF1000,1000_QL80_.jpg'},
                 {b_name:'Daily Rituals',R_name: 'Mason Currey',b_img: 'https://m.media-amazon.com/images/I/61dbpa5rJAL._AC_UF1000,1000_QL80_.jpg'},
                 {b_name:'The Power of Habit',R_name: 'Charles Duhigg', b_img:'https://m.media-amazon.com/images/I/71wm29Etl4L._AC_UF1000,1000_QL80_.jpg'},
                 {b_name:'Deep Work', R_name:'Cal Newport',b_img:'https://cdn.kobo.com/book-images/ab39cb3a-7057-41e7-89a7-0d7901bdd7fe/1200/1200/False/deep-work-2.jpg'},
                 {b_name:'The Miracle Morning',R_name:'Hal Elrod',b_img:'https://m.media-amazon.com/images/I/71Eko3myOEL._AC_UF1000,1000_QL80_.jpg'},
                 {b_name:'Essentialism',R_name:'Greg McKeown',b_img:'https://m.media-amazon.com/images/I/71yWDyjGxZL._AC_UF1000,1000_QL80_.jpg'},
                 {b_name:'Make Your Bed',R_name:'Admiral William H. McRaven',b_img:'https://m.media-amazon.com/images/I/713oSHhIrHL._AC_UF1000,1000_QL80_.jpg'},
                 {b_name:'The 5 AM Club',R_name:'Robin Sharma',b_img:'https://m.media-amazon.com/images/I/61Av4S46owL._AC_UF1000,1000_QL80_.jpg'},
                 {b_name:'The Compound Effect',R_name:'Darren Hardy',b_img:'https://m.media-amazon.com/images/I/610QDSRlLYL._AC_UF1000,1000_QL80_.jpg'},
                 {b_name:'The Slight Edge',R_name:'Jeff Olson',b_img:'https://cdn.kobo.com/book-images/Images/79f1f56d-9dd5-4333-8c96-6d6034e0d83e/255/400/False/image.jpg'}
    ]
    
    //let resource_side = document.createElement('div')
    
    //bookes
    let books_side = document.createElement('div');
    let books_list = document.createElement('ul');
    books_side.className = "books-side"
    books_list.className = 'books-list';
    for(let x = 0; x < books.length;x++){
    let li = document.createElement('li')
    let book_order = document.createElement('h1');
    let Book_name = document.createElement('h2');
    let Writer_name = document.createElement('p');
    let Book_img =  document.createElement('img');
     book_order.textContent = (x + 1);
     Book_name.textContent = books[x].b_name;
     Writer_name.textContent = books[x].R_name;
     Book_img.src = books[x].b_img;
     li.appendChild( book_order)
     li.appendChild(Book_name)
     li.appendChild(Writer_name)
     li.appendChild(Book_img)
     books_list.appendChild(li)
    }
    books_side.appendChild(books_list);
    bot_home_page.appendChild(books_side)
    home_page.appendChild(bot_home_page);
    return home_page;
    }

    export let _home_page = Home();
    

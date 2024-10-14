let home_page = document.createElement('div'); //Home page
const routineBenefits = [
  {
    title: "Boosts Productivity",
    paragraph: "A well-structured routine helps reduce decision fatigue by automating daily tasks, freeing mental energy for more significant decisions. When your day is planned out, you're not wasting mental energy deciding what to do next, allowing you to focus on high-priority tasks. This can lead to improved performance, as you spend less time on trivial choices and more on impactful work. A solid routine removes the distractions of 'what's next' and replaces them with a steady rhythm, ensuring that time is used efficiently. Additionally, routines can be tailored to optimize your most productive times of day, further enhancing output.",
    link: "https://www.forbes.com/sites/forbescoachescouncil/2021/07/28/how-a-daily-routine-can-boost-productivity/"
  },
  {
    title: "Improves Focus",
    paragraph: "Having a set routine allows you to allocate time to essential tasks without distractions, improving concentration and focus. By eliminating the randomness in how you approach your day, you train your brain to expect and prepare for focused work. This structure helps to minimize distractions and set clear boundaries between different activities, making it easier to stay on task. Furthermore, a routine signals your brain when it's time to work and when it's time to rest, making it easier to switch between these modes efficiently. Over time, this process enhances your ability to achieve a deep focus, improving both the quality and speed of your work.",
    link: "https://www.psychologytoday.com/us/blog/click-here-happiness/201912/10-strategies-improve-focus-and-concentration"
  },
  {
    title: "Reduces Stress",
    paragraph: "Knowing what to expect each day reduces uncertainty and anxiety. Routine can provide a sense of control over your environment, which is key in managing stress. When your tasks and schedule are planned in advance, you eliminate the stress of constant decision-making, which is a known source of anxiety. Instead, you focus on executing what’s already planned, allowing you to approach the day with more confidence and calm. Furthermore, a routine helps you prepare mentally for what's ahead, making it easier to navigate unexpected challenges without feeling overwhelmed. It also offers a framework for incorporating stress-reducing activities, such as mindfulness or exercise, further aiding in stress management.",
    link: "https://www.verywellmind.com/how-to-reduce-stress-3145086"
  },
  {
    title: "Builds Discipline",
    paragraph: "Repeated actions through routine foster self-discipline, which is key for long-term success. By sticking to a routine, you build the habit of completing tasks regularly, even when motivation is lacking. This consistent practice strengthens your self-control and determination, helping you stay on track with both short-term goals and long-term ambitions. The power of routine lies in its ability to make disciplined behavior automatic, reducing reliance on willpower alone. Over time, you become accustomed to taking productive actions regardless of how you feel in the moment, which is essential for achieving sustained success in any area of life.",
    link: "https://www.verywellmind.com/self-discipline-why-it-s-important-and-how-to-develop-it-5190212"
  },
  {
    title: "Promotes Healthy Habits",
    paragraph: "Routine encourages healthy behaviors, such as exercise, proper eating, and sleep, all contributing to overall well-being. By scheduling these important activities into your daily routine, you’re more likely to prioritize them consistently, leading to better health outcomes. A routine creates a structure that makes it easier to engage in habits that are good for your physical and mental health, turning them into second nature over time. Moreover, routines help prevent unhealthy behaviors, such as skipping meals or staying up late, as they provide a framework for balance and self-care. The cumulative effect of regularly practicing healthy habits contributes to increased energy, better mental clarity, and an overall improvement in quality of life.",
    link: "https://www.helpguide.org/articles/healthy-living/how-to-start-exercising-and-stick-to-it.htm"
  },
  {
    title: "Enhances Time Management",
    paragraph: "A routine helps prioritize tasks, ensuring that important activities are completed without procrastination. By organizing your day into predictable segments, you’re able to allocate time effectively to tasks that align with your goals. This not only helps you stay on top of deadlines but also minimizes the amount of time wasted on distractions or low-value activities. In the long run, efficient time management becomes easier as you refine your routine to fit your priorities, creating more room for both work and personal activities. Furthermore, a routine provides a clear framework for balancing urgent tasks with important but non-urgent activities, ensuring nothing gets overlooked.",
    link: "https://www.lifehack.org/articles/productivity/20-time-management-tips-stay-organized.html"
  },
  {
    title: "Increases Consistency",
    paragraph: "Consistency in action often leads to success in the long term, whether in professional or personal life. A routine creates the framework for repeated behaviors, allowing you to build momentum and make gradual, steady progress toward your goals. When you engage in consistent behavior, whether it's working on a project or practicing a skill, you're more likely to see incremental improvements, which compound over time. This consistency is crucial for developing expertise and achieving long-term success. Moreover, a reliable routine helps you avoid the ups and downs of sporadic efforts, ensuring that progress is sustained and measurable.",
    link: "https://www.lifehack.org/639259/this-is-why-consistency-the-key-to-success"
  },
  {
    title: "Supports Mental Health",
    paragraph: "A stable routine can provide emotional grounding, which is helpful for mental health. The predictability of a routine can reduce feelings of overwhelm and provide a sense of control over your day-to-day life, which is critical for reducing anxiety and depression. Routines help establish a sense of normalcy and stability, even during times of uncertainty, which is crucial for emotional regulation. By incorporating time for self-care, relaxation, and activities you enjoy into your routine, you actively support your mental well-being. Additionally, having a routine that includes social interaction, hobbies, or mindfulness practices can further enhance mental health by providing balance and a sense of fulfillment.",
    link: "https://www.verywellmind.com/how-to-establish-a-daily-routine-for-good-mental-health-5184045"
  },
  {
    title: "Creates Momentum",
    paragraph: "Routine helps build momentum by breaking tasks into smaller, manageable steps that compound over time. When you break larger tasks into smaller, regular actions, you make steady progress without feeling overwhelmed. Over time, the accumulation of these small wins creates a sense of achievement and builds confidence, making it easier to keep moving forward. Momentum reduces resistance to getting started each day, as your brain becomes accustomed to regular progress, which makes larger goals seem less daunting. Ultimately, the momentum generated by a routine increases productivity and makes it easier to tackle more ambitious projects with confidence.",
    link: "https://jamesclear.com/how-to-build-new-habits"
  },
  {
    title: "Fosters Growth",
    paragraph: "Routine allows individuals to set aside time for self-improvement, learning, or other forms of personal development. By dedicating consistent time to activities that promote growth, such as reading, practicing a skill, or reflecting on personal goals, you ensure that progress is continuous. Routine creates space for deliberate practice and reflection, both of which are essential for meaningful self-development. Over time, these small but consistent efforts lead to significant personal and professional growth, as they help you stay focused on long-term improvement. Whether it's acquiring new knowledge or refining existing skills, having a routine dedicated to growth ensures that you're always moving forward in your personal development journey.",
    link: "https://positivepsychology.com/personal-growth-development/"
  }
];
      

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
    

    //Why routine
    let sugg_div = document.createElement('div')
    sugg_div.className = 'sugg-div'
    let sugg_head = document.createElement('h2')
    sugg_head.textContent = 'Why?'
    let ul_sugg = document.createElement('ul');
    routineBenefits.forEach((ele)=>{
        let li_sugg = document.createElement('li')
        let title = document.createElement('a')
        let title_header = document.createElement('h4')
        title_header.textContent = ele.title;
        title.href = `#${ele.title}`;
        title.appendChild(title_header);
        li_sugg.appendChild(title)
        ul_sugg.appendChild(li_sugg);
    });
    sugg_div.appendChild(sugg_head);
    sugg_div.appendChild(ul_sugg);

    //intro and sugg_div are going to be in the same div
    let intro_sugg_cont = document.createElement('div');
    intro_sugg_cont.className = 'intro-sugg-cont';
    intro_sugg_cont.appendChild(intro)
    intro_sugg_cont.appendChild(sugg_div)
    top_home_page.appendChild(intro_sugg_cont);

    //resorce_side
    let resorce_cont = document.createElement('div');
    resorce_cont.className = 'resorce-cont'
    let resorce_cont_list = document.createElement('ul')
    routineBenefits.forEach((ele)=>{
      let li_resorce = document.createElement('li');
      li_resorce.id = `${ele.title}`
      let h3_resorce = document.createElement('h3');
      let a_resorce = document.createElement('a');
      let span_a = document.createElement('span');
      let para = document.createElement('p');
      h3_resorce.textContent = ele.title;
      para.textContent = ele.paragraph;
      a_resorce.href = `${ele.link}`;
      a_resorce.target = '_blank'
      span_a.textContent = "Learn More"
      a_resorce.appendChild(span_a)
      li_resorce.appendChild(h3_resorce)
      li_resorce.appendChild(para);
      li_resorce.appendChild(a_resorce)
      resorce_cont_list.appendChild(li_resorce);
    });
    resorce_cont.appendChild(resorce_cont_list);
    top_home_page.appendChild(resorce_cont)
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
   
    

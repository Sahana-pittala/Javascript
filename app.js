



    
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', ()=> {
        const navLinks = document.querySelector('.nav-links');
        const navButtons = document.querySelector('.nav-buttons');


        navLinks.classList.toggle('active');
        navButtons.classList.toggle('active');

        burger.classList.toggle('toggle');
    });

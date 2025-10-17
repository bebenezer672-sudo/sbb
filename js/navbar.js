
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileClose = document.querySelector('.mobile-close');
    
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            console.log('Hamburger clicked!');
            hamburgerBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    } 
    
    
    
        mobileClose.addEventListener('click', () => {
            console.log('Close clicked!');
            hamburgerBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    

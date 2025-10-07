class IntroScreen {
    
    constructor() {
        this.introDuration = 4000000; 
        this.init();
    }

    init() {
        document.body.classList.add('intro-active');
        this.setupEventListeners();
        this.autoHideIntro();
        this.addInteractiveElements();
         this.introtagline()
    }

    setupEventListeners() {


        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideIntro();
            }
        });
    }

    autoHideIntro() {
        setTimeout(() => {
            this.hideIntro();
        }, this.introDuration);
    }

    hideIntro() {
        const introScreen = document.querySelector('.intro-screen');
        
        if (introScreen && !introScreen.classList.contains('fade-out')) {
            introScreen.classList.add('fade-out');
            document.body.classList.remove('intro-active');
            
            setTimeout(() => {
                if (introScreen.parentNode) {
                    introScreen.parentNode.removeChild(introScreen);
                }
                this.triggerMainSiteAnimations();
            }, 800);
        }
    }

     introtagline() {
       const letter = document.querySelector(".intro-tagline");
       if(letter) {
       const text = letter.textContent;
       letter.textContent = "";

       [...text].forEach((char, ch) => {
        setTimeout(() => {
            text.textContent += char;
        }, ch * 80);
       });
     }
    
    }
   
  

    typewriterEffect() {
        const subtitle = document.querySelector('.intro-subtitle');
        
        if (subtitle) {
            const originalText = subtitle.textContent;
            subtitle.textContent = '';
            
            setTimeout(() => {
                let i = 0;
                
                const typeInterval = setInterval(() => {
                    subtitle.textContent += originalText.charAt(i);
                    i++;
                    
                    if (i >= originalText.length) {
                        clearInterval(typeInterval);
                    }
                }, 50);
            }, 1500);
        }
    }



    static createIntro() {
        const introHTML = `
            <div class="intro-screen">
                <div class="intro-bg-elements"></div>
                <div class="intro-content">
                    <img src="image/logo_transparent_white.png" alt="Bristo Bakery Logo" class="intro-logo">
                    <h1 class="intro-title">BRISTO</h1>
                    <p class="intro-subtitle">Artisan Bakery & Café Experience</p>
                    <p class="intro-tagline">Where every bite tells a story of tradition and craftsmanship</p>
                    <div class="loading-animation">
                        <div class="loading-dot"></div>
                        <div class="loading-dot"></div>
                        <div class="loading-dot"></div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('afterbegin', introHTML);
        return new IntroScreen();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    IntroScreen.createIntro();
});

export default IntroScreen;




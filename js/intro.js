class IntroScreen {
    
    constructor() {
        this.introDuration = 3500; 
        this.init();
    }

    init() {
        document.body.classList.add('intro-active');
        this.setupEventListeners();
        this.autoHideIntro();
        this.addInteractiveElements();
    }

    setupEventListeners() {
        const skipButton = document.querySelector('.skip-intro');
        const introScreen = document.querySelector('.intro-screen');

        if (skipButton) {
            skipButton.addEventListener('click', () => {
                this.hideIntro();
            });
        }

        if (introScreen) {
            introScreen.addEventListener('click', (e) => {
                if (e.target === introScreen || e.target.closest('.intro-content')) {
                    this.hideIntro();
                }
            });
        }

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

    addInteractiveElements() {
        const bgElements = document.querySelector('.intro-bg-elements');
        
        if (bgElements) {
            const elements = ['🥐', '🍞', '☕'];
            
            elements.forEach((element, index) => {
                const floatingEl = document.createElement('div');
                floatingEl.className = 'floating-element';
                floatingEl.innerHTML = element;
                floatingEl.style.fontSize = '2rem';
                bgElements.appendChild(floatingEl);
            });
        }

        this.typewriterEffect();
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

    triggerMainSiteAnimations() {
        const heroWrapper = document.querySelector('.hero-wrapper');
        if (heroWrapper) {
            heroWrapper.style.opacity = '0';
            heroWrapper.style.transform = 'translateY(20px)';
            heroWrapper.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            
            setTimeout(() => {
                heroWrapper.style.opacity = '1';
                heroWrapper.style.transform = 'translateY(0)';
            }, 100);
        }

        const nav = document.querySelector('nav');
        if (nav) {
            nav.style.transform = 'translateY(-100%)';
            nav.style.transition = 'transform 0.8s ease-out';
            
            setTimeout(() => {
                nav.style.transform = 'translateY(0)';
            }, 300);
        }

        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 500 + (index * 100));
        });
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
                <button class="skip-intro">Skip Intro</button>
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
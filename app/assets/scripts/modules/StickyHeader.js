import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class StickyHeader {
    constructor(){
        this.setVariables();
        this.setEventHandlers();
        this.scrollEventDispatcher();
    }

    setVariables(){

        this.backgroundBar = document.querySelector('.header__background-bar');
        this.isBackgroundBarVisible = false;
        this.pageSections = document.querySelectorAll('.page-section');

        this.sectionDictionary = {};

        this.pageSections.forEach(section => {
            this.sectionDictionary[`${section.id}`] = {};
            this.sectionDictionary[`${section.id}`].menuLink = 
                document.querySelector(`#${section.id}-link`);
        });

        this.calcWindowHeightAndScrolls();

        this.resizeDebounce = debounce(this.calcWindowHeightAndScrolls, 200).bind(this);
        this.scrollThrottle = throttle(this.scrollEventDispatcher, 200).bind(this);
        
    }

    setEventHandlers(){
        window.addEventListener('resize', this.resizeDebounce);
        window.addEventListener('scroll', this.scrollThrottle);
    }

    scrollEventDispatcher() {
        this.toggleBackgroundBar();
        let currentScroll = window.scrollY;
        let dict = this.sectionDictionary;

        if(currentScroll < this.browserHeight * 0.1 && dict.currentSection) {
            dict.previousSection = dict.currentSection;
            dict.previousSection.menuLink.classList.remove('nav-menu__active-item');
            return;
        }
        // above is ESCAPE CONDITION

        for(let key in dict) {
            let section = dict[key];

            if(currentScroll > section.minScrollRange) {
                if(dict.currentSection){
                    dict.previousSection = dict.currentSection;
                    dict.previousSection.menuLink.classList.remove('nav-menu__active-item');
                }
                dict.currentSection = section;
                dict.currentSection.menuLink.classList.add('nav-menu__active-item');
            }
        }
    }

    calcWindowHeightAndScrolls() {
        this.browserHeight = window.innerHeight;

        this.pageSections.forEach(section => {
            setTimeout(() => {
                let minScroll = section.offsetTop - (window.innerHeight * 0.20);

                this.sectionDictionary[`${section.id}`].minScrollRange = minScroll;
            }, 10);
        });

        setTimeout(() => {
            console.log(this.sectionDictionary);
        }, 100);
    }

    toggleBackgroundBar() {
        if(this.isBackgroundBarVisible && window.scrollY < 20) {
            this.isBackgroundBarVisible = false;
            this.backgroundBar.classList.remove('header__background-bar--visible');

        } else if (!this.isBackgroundBarVisible && window.scrollY > 20) {
            this.isBackgroundBarVisible = true;
            this.backgroundBar.classList.add('header__background-bar--visible');
        }
    }

}

export default StickyHeader;
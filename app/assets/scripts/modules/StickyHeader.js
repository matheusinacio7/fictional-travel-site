import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class StickyHeader {
    constructor(){
        this.setVariables();
        this.setEventHandlers();
    }

    setVariables(){

        this.backgroundBar = document.querySelector('.header__background-bar');
        this.isBackgroundBarVisible = false;
        this.pageSections = document.querySelectorAll('.page-section');
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

        this.pageSections.forEach(section => {

        });
    }

    calcWindowHeightAndScrolls() {
        this.browserHeight = window.innerHeight;

        this.pageSections.forEach(section => {
            console.log(section.id);
            console.log(section.offsetTop);
            section.minScrollRange = section.offsetTop - (window.innerHeight * 0.3);
        });
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
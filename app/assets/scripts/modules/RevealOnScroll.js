import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class RevealOnScroll {
    constructor(elements, revealThreshold = 75, hideThreshold = 90){
        this.setVariables(elements, revealThreshold, hideThreshold);
        this.setEventHandlers();
        this.initHideElements();
    }

    setVariables(elements, revealThreshold, hideThreshold) {
        this.targetElements = elements;
        this.revealThreshold = revealThreshold;
        this.hideThreshold = hideThreshold;
        this.browserWindowHeight = window.innerHeight;
        this.scrollThrottle = throttle(this.revealCaller, 200).bind(this);
        this.resizeDebounce = debounce(this.resizeCalc, 200).bind(this);
    }

    initHideElements(){
        this.targetElements.forEach(el => el.classList.add('reveal-item'));
    }

    setEventHandlers() {
        window.addEventListener('scroll', this.scrollThrottle);
        window.addEventListener('resize', this.resizeDebounce);
    }

    resizeCalc() {
        this.browserWindowHeight = window.innerHeight;
        this.revealCaller();
    }

    revealCaller() {
        this.targetElements.forEach(el => this.revealItem(el));
    }

    revealItem(el) {
        if(this.calculateScrollPercent(el) < this.revealThreshold) {
            el.classList.add('reveal-item--visible');
        } else if (this.calculateScrollPercent(el) > this.hideThreshold) {
            el.classList.remove('reveal-item--visible');
        }
    }

    calculateScrollPercent(el) {
        if(this.browserWindowHeight + window.scrollY < el.offsetTop) {
            return 100;
        }

        return ((el.getBoundingClientRect().y / window.innerHeight) * 100)
    }
}

export default RevealOnScroll;
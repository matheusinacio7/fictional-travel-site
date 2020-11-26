import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu.js';
import StickyHeader from './modules/StickyHeader.js';

if (module.hot) {
    module.hot.accept();
}

let mobileMenu = new MobileMenu;
let stickyHeader = new StickyHeader;
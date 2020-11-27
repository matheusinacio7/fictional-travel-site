import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu.js';
import StickyHeader from './modules/StickyHeader.js';
import LogoJump from './modules/LogoAnchorJumping.js';

if (module.hot) {
    module.hot.accept();
}

new MobileMenu;
new StickyHeader;
new LogoJump;

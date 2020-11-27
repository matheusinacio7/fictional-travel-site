import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu.js';
import StickyHeader from './modules/StickyHeader.js';
import LogoJump from './modules/LogoAnchorJumping.js';
import RevealOnScroll from './modules/RevealOnScroll';

new RevealOnScroll(document.querySelectorAll('.feature-item'), 80);
new RevealOnScroll(document.querySelectorAll('.testimonial-item'), 85, 95);
new MobileMenu;
new StickyHeader;
new LogoJump;

if (module.hot) {
    module.hot.accept();
}


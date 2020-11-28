import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu.js';
import StickyHeader from './modules/StickyHeader.js';
import LogoJump from './modules/LogoAnchorJumping.js';
import RevealOnScroll from './modules/RevealOnScroll.js';
import 'lazysizes'

new RevealOnScroll(document.querySelectorAll('.feature-item'), 80);
new RevealOnScroll(document.querySelectorAll('.testimonial-item'), 85, 95);
new MobileMenu;
new StickyHeader;
new LogoJump;

let modal;

document.querySelectorAll('.modal__open').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        if(typeof modal != 'undefined') {
            modal.openModal();
        } else {
            import(/* webpackChunkName: "modal" */ './modules/Modal.js').then(file => {
                modal = new file.default();
                setTimeout(() => modal.openModal(), 20);
            }).catch( e => console.error(e));
        }
    });
});

if (module.hot) {
    module.hot.accept();
}
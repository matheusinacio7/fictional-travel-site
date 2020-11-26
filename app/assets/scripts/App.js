import '../styles/styles.css';
import RevealOnScroll from './modules/RevealOnScroll';

new RevealOnScroll(document.querySelectorAll('.feature-item'), 80);
new RevealOnScroll(document.querySelectorAll('.testimonial-item'), 85, 95);

if (module.hot) {
    module.hot.accept();
}
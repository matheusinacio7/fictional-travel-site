class MobileMenu {
    constructor(){
        this.setVariables();
        this.setEventHandlers();
    }

    setVariables(){
        this.menuIcon = document.querySelector(".header__icon");
        this.menuBar = document.querySelector(".header__bar");
        this.header = document.querySelector(".header");
        this.allMenuItems = document.querySelectorAll('.nav-menu__item');
        this.logo = document.querySelector('.logo');
    }

    setEventHandlers(){
        this.menuIcon.addEventListener("click", () => this.toggleMenu());
        this.allMenuItems.forEach(item => {
            item.addEventListener('click', () => this.hideMenu());
        });
        this.logo.addEventListener('click', () => this.hideMenu());
    }

    toggleMenu(){
        this.menuBar.classList.toggle("header__bar--visible");
        this.header.classList.toggle("header--expanded");
        this.menuIcon.classList.toggle("header__icon--X");
    }

    hideMenu() {
        this.menuBar.classList.remove('header__bar--visible');
        this.header.classList.remove('header--expanded');
        this.menuIcon.classList.remove("header__icon--X");
    }
}

export default MobileMenu;
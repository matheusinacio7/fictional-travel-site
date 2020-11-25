class MobileMenu {
    constructor(){
        this.setVariables();
        this.setEventHandlers();
    }

    setVariables(){
        this.menuIcon = document.querySelector(".header__icon");
        this.menuBar = document.querySelector(".header__bar");
        this.header = document.querySelector(".header");
    }

    setEventHandlers(){
        this.menuIcon.addEventListener("click", () => this.toggleMenu()); 
    }

    toggleMenu(){
        this.menuBar.classList.toggle("header__bar--visible");
        this.header.classList.toggle("header--expanded");
        this.menuIcon.classList.toggle("header__icon--X");
    }
}

export default MobileMenu;
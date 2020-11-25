class MobileMenu {
    constructor(){
        this.setVariables();
        this.setEventHandlers();
    }

    setVariables(){
        this.menuIcon = document.querySelector(".header__icon");
        this.menuBar = document.querySelector(".header__bar");
    }

    setEventHandlers(){
        this.menuIcon.addEventListener("click", () => this.toggleMenu()); 
    }

    toggleMenu(){
        this.menuBar.classList.toggle("header__bar--visible");
    }
}

export default MobileMenu;
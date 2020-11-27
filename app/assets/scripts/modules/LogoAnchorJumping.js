class LogoAnchorJumping {
    constructor(){
        this.setVariables();
        this.setEventHandlers();
    }

    setVariables(){
        this.logo = document.querySelector('.logo');
        this.largeHeroSection = document.querySelector('.large-hero');
    }

    setEventHandlers(){
        this.logo.addEventListener('click', () => this.jumpToStart());
    }

    jumpToStart(){
        location.hash = this.largeHeroSection.id;
    }
}

export default LogoAnchorJumping;
class LogoAnchorJumping {
    constructor(){
        this.setVariables();
        this.setEventHandlers();
    }

    setVariables(){
        this.logo = document.querySelector('.logo');
    }

    setEventHandlers(){
        this.logo.addEventListener('click', () => this.jumpToStart());
    }

    jumpToStart(){
        location.hash = '#';
    }
}

export default LogoAnchorJumping;
class Modal {
    constructor(){
        this.injectHTML();
        this.setVariables();
        this.setEventHandlers();
    }

    setVariables(){
        this.modal = document.querySelector('.modal');
        this.closeModalButton = document.querySelector('.modal__close');
    }

    setEventHandlers(){
        this.closeModalButton.addEventListener('click', () => this.closeModal());
    }

    injectHTML(){
        document.body.insertAdjacentHTML('beforeend', `
            <div class="modal">

                <div class="modal__content generic-content">
                    <div class="row row--narrow">
                        <h2 class="modal__title headline"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="64" height="48" viewBox="0 0 64 48"><defs><style>.cls-1{fill:#2f5572;}</style></defs><title>mail</title><path class="cls-1" d="M0,0V8L32,24,64,8V0H0ZM0,16V48H64V16L32,32Z"/></svg> Get in <strong>Touch</strong></h2>
                    </div>

                    <div class="row row--narrow">
                        <p class="modal__description"><span>We will have an online order system in place soon.</span> <span>Until then, connect with us on any of the platforms below!</span></p>
                    </div>
                
                    <div class="flex-row flex-row--2a-4s">
                        <div class="flex-col flex-col--center">
                        <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
                        </div>
            
                        <div class="flex-col flex-col--center">
                        <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
                        </div>
            
                        <div class="flex-col flex-col--center">
                        <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
                        </div>
                        
                        <div class="flex-col flex-col--center">
                        <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
                        </div>
                    </div>
        
                </div>

                <div class="modal__close">X</div>
            </div>
        `);
    }

    openModal(e) {
        this.modal.classList.add('modal--visible');
    }

    closeModal() {
        this.modal.classList.remove('modal--visible');
    }
}

export default Modal;
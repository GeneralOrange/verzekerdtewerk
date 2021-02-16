//Form handlers
(()=> {
    const selector = document.querySelector('.js-selector');

    if(!selector){
        return;
    }

    const handleToggler = (e) => {
        switch(e.target.value){
            case 'Ik wil een klus plaatsen':
                termsAndConditions[0].classList.add('js-terms--active');
                termsAndConditions[1].classList.remove('js-terms--active');
                break;
            case 'Ik wil klussen':
                termsAndConditions[1].classList.add('js-terms--active');
                termsAndConditions[0].classList.remove('js-terms--active');
                break;
            default:
                termsAndConditions[0].classList.remove('js-terms--active');
                termsAndConditions[1].classList.remove('js-terms--active');
                break;
        }
    }

    const handleInput = (e) => {
        let arrayCheck = [];
        const permissions = document.querySelector('.js-permissions');

        forminputs.forEach(input => {
            const inputBoolean = checkInput(input);
            arrayCheck.push(inputBoolean);
        });

        

        if(!arrayCheck.includes(false)){
            permissions.classList.add('js-permissions--active');
        } else {
            permissions.classList.remove('js-permissions--active');
        }
    }

    const checkInput = (input) => {
        if(input.value === ""){
            return false;
        }
        return true;
    }

    const termsAndConditions = document.querySelectorAll('.js-terms');
    const forminputs = document.querySelectorAll('.js-forminput');

    selector.addEventListener('change', handleToggler);

    forminputs.forEach(input => {
        input.addEventListener('change', handleInput);
    });
})();

(()=> {
    const sideToggler = document.querySelector('.js-side-toggler');

    if(!sideToggler){
        return;
    }

    const handleAddSidebar = (e) => {
        const sideContent = document.querySelector('.sideContent');

        if(e.target === sideToggler || sideContent.contains(e.target) && !e.target.classList.contains('sideContent__specialist')){
            sideToggler.classList.add('js-side-toggler--inactive');
            sideContent.classList.add('js-active');
        } else {
            sideToggler.classList.remove('js-side-toggler--inactive');
            sideContent.classList.remove('js-active');
        }
        
    }

    document.addEventListener('click', handleAddSidebar);
})();

(()=> {
    const sideContent = document.querySelector('.sideContent');

    if(!sideContent){
        return;
    }

    function populatePre(url) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            const newParagraph = document.createElement('p');
            newParagraph.innerText = this.response;
            document.getElementById('specialist_contents').appendChild(newParagraph);

            console.log(this);
        };
        xhr.open('GET', url);
        xhr.send();
    }

    const handleSpecialistClose = (e) => {
        if(e.target === popupFrame.querySelector('.close')){
            popupFrame.classList.remove('js-active');
        }
    }

    const handleSpecialistPopup = (e) => {
        const fileName = `${e.target.innerText}.php`;
        //populatePre(`./assets/documents/${fileName}`);
        sideContent.classList.remove('js-active');
        popupFrame.classList.add('js-active');
        
        document.addEventListener('click', handleSpecialistClose);
    }

    const popupFrame = document.getElementById('specialist_contents');
    const specialists = document.querySelectorAll('.sideContent__specialist');

    specialists.forEach(specialist => {
        specialist.addEventListener('click', handleSpecialistPopup);
    });
})();
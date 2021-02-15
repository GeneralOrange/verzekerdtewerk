//Form handlers
(()=> {
    const selector = document.querySelector('.js-selector');

    if(!selector){
        return;
    }

    function handleToggler(e){
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

    function handleInput(e){
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

    function checkInput(input) {
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

    function handleAddSidebar(e){
        const sideContent = document.querySelector('.sideContent');

        if(e.target === sideToggler || sideContent.children.includes(e.target)){
            sideToggler.classList.add('js-side-toggler--inactive');
            sideContent.classList.add('js-active');
        } else {
            sideToggler.classList.remove('js-side-toggler--inactive');
            sideContent.classList.remove('js-active');
        }
        
    }

    document.addEventListener('click', handleAddSidebar);
})();
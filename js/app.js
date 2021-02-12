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
            const inputObj = {
                id: input.id,
                value: input.value
            }

            arrayCheck.push(inputObj);
        });

        

        arrayCheck.forEach(check => {
            if(check.value === ''){
                permissions.classList.add('js-permissions--active');
            } else {
                permissions.classList.remove('js-permissions--active');
            }
        });

        

        
    }

    const termsAndConditions = document.querySelectorAll('.js-terms');
    const forminputs = document.querySelectorAll('.js-forminput');

    selector.addEventListener('change', handleToggler);

    forminputs.forEach(input => {
        input.addEventListener('change', handleInput);
    });
})();
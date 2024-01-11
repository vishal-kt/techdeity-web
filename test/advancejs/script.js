const button = document.querySelectorAll( '.button')
const body = document.querySelector( "body")

// button.forEach((btn)=>console.log(btn))

button.forEach(function (button) {
    // console.log(button);
    button.addEventListener('click',function (e) {
        
        // console.log(e.target);


        // if(e.target.id === 'grey'){
        //     body.style.backgroundColor = e.target.id;
        // }

        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id;
                break;
            case'White':
                body.style.backgroundColor = e.target.id;
                break;
            case'Blue':
                body.style.backgroundColor = e.target.id;
                break;
            case'Yellow':
                body.style.backgroundColor = e.target.id;
                break;
            default:
                break;
        }
        
    })
});

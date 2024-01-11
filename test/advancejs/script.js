function pro1() {
 const button = document.querySelectorAll( '.button')
const body = document.querySelector( "body")
const text = document.querySelector( "h1")
const text2 = document.querySelector( "h2")

const originalTextContent = text.textContent;
const originalTextContent2 = text2.textContent;


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
                text.style.color = 'white';
                text2.style.color = 'white';
                break;
            case'White':
                body.style.backgroundColor = e.target.id;
                text.style.color = 'black';
                text2.style.color = 'black';
                break;
            case'Lightblue':
                body.style.backgroundColor = e.target.id;
                text.textContent =originalTextContent;
                text2.textContent =originalTextContent2;
                break;
            case'Yellow':
                body.style.backgroundColor = e.target.id;
                text.textContent ="kya baye"
                text2.textContent ="backhoodi chalti rhni chiye"
                break;
            default:
                break;
        }
        
    })
});

}

pro1()
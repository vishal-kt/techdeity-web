// let heading = document.querySelector('h1');
// heading.style.color = 'red';

// let click = document.addEventListener('click',{

// })

document.addEventListener("DOMContentLoaded",function () {
    
    var style = document.createElement("style");
    style.innerHTML=`
    .clickDev{
        position :absolute;
        border :5px solid black;
        border-radius:50%;
        width:100px;
        height:100px;
    }
    `;


    document.head.appendChild(style);

    document.addEventListener("click",function (e) {
        var x = e.clientX;
        var y = e.clientY;
        
        var div = document.createElement("div");

        div.className="clickDev";
        div.style.left=x+"px";
        div.style.top=y+"px";

        document.body.appendChild(div);
    })
})
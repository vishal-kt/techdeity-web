// const requestUrl= 'https://api.github.com/users/vishal-kt'
// const xhr = new XMLHttpRequest();
// xhr.open('GET',requestUrl)
// xhr.onreadystatechange = function () {
//   console.log(xhr.readyState);
//     if(xhr.readyState ===4){
//         const data = JSON.parse(this.responseText)
//         console.log(typeof data);
//     }

// }

// xhr.send()

let pp = document.getElementsByClassName('profile-image')
let n = document.getElementsByTagName('h2')
const requestUrl = 'https://api.github.com/users/vishal-kt';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);
xhr.onreadystatechange = function () {
    
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        
        // console.log(typeof pp);
        console.log(data);
        
        if(pp.length>0 && data.avatar_url){
            pp[0].src =data.avatar_url
            n[0].innerHTML=data.name
        }
        
    }
};
xhr.send(); 



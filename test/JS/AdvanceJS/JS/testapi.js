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

const requestUrl = 'https://api.github.com/users/vishal-kt';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        console.log(typeof data);
    }
};
xhr.send();  // Move this line outside the onreadystatechange function

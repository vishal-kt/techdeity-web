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
xhr.onreadystatechange = function () {
    if(xhr.readyState==1){
        console.log('ready state 1 OPENED : the request has been open');
    }
};

xhr.open('GET', requestUrl,true);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 2) {
      console.log('readyState 2 (HEADERS_RECEIVED): Headers have been received.');
      console.log('Status:', xhr.status);
      console.log('Headers:', xhr.getAllResponseHeaders());
    }
  };

xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 3) {
      console.log('readyState 3 (LOADING): The response is being received.');
      console.log('Partial response data:', xhr.responseText);
    }
  };
  

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

fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/PM_at_the_Pran_Pratishtha_ceremony_of_Shree_Ram_Janmaboomi_Temple_in_Ayodhya%2C_Uttar_Pradesh_on_January_22%2C_2024_%28cropped%29.jpg/220px-PM_at_the_Pran_Pratishtha_ceremony_of_Shree_Ram_Janmaboomi_Temple_in_Ayodhya%2C_Uttar_Pradesh_on_January_22%2C_2024_%28cropped%29.jpg')
  .then(response => response.blob())
  .then(blob => {
    // Handle the blob, for example, display an image
    const imageUrl = URL.createObjectURL(blob);
    console.log(imageUrl);
    const img = document.createElement('img');
    img.src = imageUrl;
    document.body.appendChild(img);
    console.log(img);
  })
  .catch(error => {
    console.error('Error:', error);
  });



 
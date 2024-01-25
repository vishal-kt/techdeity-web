// Create a new XMLHttpRequest object


var xhr = new XMLHttpRequest();

// Example for readyState 1 (OPENED)
xhr.onreadystatechange = function() {
  if (xhr.readyState === 1) {
    console.log('readyState 1 (OPENED): The request has been opened.');
  }
};

// Open the request (but not send it)
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

// Example for readyState 2 (HEADERS_RECEIVED)
xhr.onreadystatechange = function() {
  if (xhr.readyState === 2) {
    console.log('readyState 2 (HEADERS_RECEIVED): Headers have been received.');
    console.log('Status:', xhr.status);
    console.log('Headers:', xhr.getAllResponseHeaders());
  }
};

// Send the request
xhr.send();

// Example for readyState 3 (LOADING)
xhr.onreadystatechange = function() {
  if (xhr.readyState === 3) {
    console.log('readyState 3 (LOADING): The response is being received.');
    console.log('Partial response data:', xhr.responseText);
  }
};

// Example for readyState 4 (DONE)
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log('readyState 4 (DONE): The request is complete.');
    console.log('Status:', xhr.status);
    console.log('Response data:', xhr.responseText);
  }
};

// Send the request (if not sent already)
xhr.send();

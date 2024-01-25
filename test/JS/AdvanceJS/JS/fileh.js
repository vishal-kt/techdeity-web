const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const imageUrl = 'https://www.livemint.com/lm-img/img/2024/01/22/600x338/PTI01-22-2024-000134A-0_1705910253834_1705910274908.jpg';
const outputFileName = 'image-copy.jpg';
const outputPath = path.join(__dirname, outputFileName);

fetch(imageUrl)
  .then(response => response.buffer())
  .then(buffer => {
    fs.writeFileSync(outputPath, buffer);
    console.log('Image copied successfully.');
  })
  .catch(error => {
    console.error('Error:', error);
  });

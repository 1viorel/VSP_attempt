const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = 'https://www.bnr.ro/data.xml';

fetch(corsProxyUrl + targetUrl)
  .then(response => response.text())
  .then(data => {
    // Process the retrieved data here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });

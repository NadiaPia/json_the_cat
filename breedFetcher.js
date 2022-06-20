const request = require('request');
const args = process.argv;
let breed = args.slice(2);
let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed[0];
//console.log(url)

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
  }
 
  const data = JSON.parse(body);
  
  if (data.length === 0) {
    console.log("Breed Not Found");
    return;
  }
  console.log(data[0]['description']);
  
});


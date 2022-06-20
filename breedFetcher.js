const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(url, (error, response, body) => {
    if (!response) {
      callback("no response from host", null);
    }
    if (response.statusCode !== 200) {
      callback(`Request was not successful. Status Code: ${response.statusCode}`, null);
    }
    if (error) {
      callback(error, null);
    
    }
    //console.log(response.statusCode)
 
    const data = JSON.parse(body);
  
    if (data.length === 0) {
    
      callback("Breed Not Found", null);
      return;
    }
    if (response && response.statusCode === 200) {
      callback(null, data[0]['description']);
    
    }
  
  });
};


module.exports = { fetchBreedDescription };


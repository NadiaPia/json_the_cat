const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

const printResult = function(error, description) {
  if (error) {
    console.log("error ", error);
  } else {
    console.log(description);
  }
};
fetchBreedDescription(breedName, printResult);
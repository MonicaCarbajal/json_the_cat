const request = require('request');

const fetchBreedData = (breedName) => {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(apiUrl, (error, response, body) => {
    if (error) {
      console.error('Error fetching data:', error);
    } else {
      const data = JSON.parse(body);

      if (Array.isArray(data) && data.length > 0) {
        const firstEntry = data[0];
        const description = firstEntry.description;
        console.log('Description:', description);
      } else {
        console.log('No data found for the breed:', breedName);
      }
    }
  });
};

// accept command-line arguments
const args = process.argv.slice(2);
const breedName = args[0];

fetchBreedData(breedName);

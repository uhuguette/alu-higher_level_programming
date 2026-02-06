#!/usr/bin/node
// Script that prints the number of movies where "Wedge Antilles" is present

const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
  console.log('Usage: node 4-starwars_count.js <API_URL>');
  process.exit(1);
}

request.get(apiUrl, { json: true }, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`HTTP Error: ${response.statusCode}`);
    return;
  }

  let count = 0;

  body.results.forEach((film) => {
    if (film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')) {
      count++;
    }
  });

  console.log(count);
});


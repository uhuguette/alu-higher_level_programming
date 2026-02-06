#!/usr/bin/node
// Script to print the title of a Star Wars movie by episode number

const request = require('request');

const movieId = process.argv[2];

if (!movieId) {
  console.log('Usage: node 3-starwars_title.js <movie_id>');
  process.exit(1);
}

const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(url, { json: true }, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`HTTP Error: ${response.statusCode}`);
    return;
  }

  console.log(body.title);
});


#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];
if (!apiUrl) process.exit(1);

request.get(apiUrl, { json: true }, (err, res, body) => {
  if (err) return;

  let count = 0;
  body.results.forEach(film => {
    if (film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')) {
      count++;
    }
  });

  console.log(count);
});


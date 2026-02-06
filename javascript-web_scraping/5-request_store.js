#!/usr/bin/node
// Script that gets the contents of a webpage and stores it in a file

const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
  console.log('Usage: node 5-request_store.js <URL> <file_path>');
  process.exit(1);
}

request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    return;
  }

  fs.writeFile(filePath, body, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err.message);
      return;
    }
  });
});


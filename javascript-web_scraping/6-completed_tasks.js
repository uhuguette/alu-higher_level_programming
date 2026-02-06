#!/usr/bin/node
// Script that computes the number of completed tasks by user id

const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
  console.log('Usage: node 6-completed_tasks.js <API_URL>');
  process.exit(1);
}

request.get(apiUrl, { json: true }, (error, response, todos) => {
  if (error) return;
  if (response.statusCode !== 200) return;

  const completedCount = {};

  todos.forEach(todo => {
    if (todo.completed) {
      if (!completedCount[todo.userId]) {
        completedCount[todo.userId] = 0;
      }
      completedCount[todo.userId]++;
    }
  });

  console.log(completedCount);
});


const {
  json,
  text
} = require('express');
const fs = require('fs');
const {
  v4: uuidv4
} = require('uuid');

// notes = {}

module.exports = (app) => {

  app.get('/api/notes', (req, res) => {
    // read from the json file 
    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
      // parse it 
      let notes = JSON.parse(data);
      // respond back with it 
      res.json(notes);
    });
  });

  app.post('/api/notes', (req, res) => {
    // take in user input from the req body
    const newNote = req.body;
    newNote.id = uuidv4();
    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
      const notes = JSON.parse(data);
      notes.push(newNote)

      fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
        if (err) throw err;
        res.json(newNote)
      });
    });
  });
};
const { json } = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


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
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      // uuid
      id: uuidv4()
    }.then(() => res.json)
    // write it to the file (fs.writeFile)
    // res.json(theCreateThing) 
  });

  // writeToFile('db/db.json', newNote())

// function to write html file 
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (error) => {
//     if(error) throw error;
//     console.log(data)
//   });
// };




  // app.delete('/api/notes/:noteId', () => {
  //   // noteId
  //   // req
  // })
};

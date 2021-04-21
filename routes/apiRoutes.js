const fs = require('fs');

// fs.readFile('../db/db.json', (err, data) => {
//   if (err) throw err;
//   let notes = JSON.parse(data);
//   console.log(notes)
// });

module.exports = (app) => {

  app.get('/api/notes', function (req, res) {
    // read from the json file 
    fs.readFile('./db/db.json', (err, data) => {
    if (err) throw err;
    // parse it 
    let notes = JSON.parse(data);
    // response back with it 
    res.json(notes)
  });
    
    
    
  });

  // app.post()
}

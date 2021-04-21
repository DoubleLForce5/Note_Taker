const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// express.static | handle files - checkout hot restraunts 

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app)

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
});


// how to send 
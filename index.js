const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});
app.get('/secret', (req, res) => {
  res.type('text/plain').send(`You found the secret! Well done!

         ,;;;, ,;;;,
        ;;;' ';' ';;;
        ;;;       ;;;
         ';;,   ,;;'
           ';;,;;'
             ';'` );
});


app.get('/', (req, res) => {
  res.send('First Pipeline Challenge - Week 4');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
const express = require('express');
const app=express();

app.get('/', (req, res) => {
    res.send('Wasssssa');
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,3]);
});

//route params
app.get('api/doj/:dd/:mm/:yyyy', (req,res) => {
    res.send(req.params);
});
//env var
const port=3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
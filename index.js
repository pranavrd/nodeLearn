const express = require('express');
const app=express();

app.use(express.json());//middleware 

const courses = [
    {id:1, name:'math'},
    {id:2, name:'science'},
    {id:3, name:'history'}];

app.get('/', (req, res) => {
    res.send('Wasssssa');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

//route params
app.get('api/doj/:dd/:mm/:yyyy', (req, res) => {
    res.send(req.params);
});

//GET requests
app.get('/api/courses/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404);
    res.send(course);
});

//POST requests
app.post('api/courses', (req, res) => {
    let course = {
        id: courses.length + 1, 
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

//env var
const port=3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
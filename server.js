const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/getData', (req, res) => {
    const data = JSON.parse(fs.readFileSync('data.json'));
    res.json(data);
});

app.post('/submit', (req, res) => {
    const newData = req.body;
    let data = JSON.parse(fs.readFileSync('data.json'));
    data.push(newData);
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    res.send("Saved");
});

app.listen(3000, () => console.log("Server running"));

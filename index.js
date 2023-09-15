const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello GET')
});
app.post('/', (req, res) => {
    res.send('Hello POST')
});
app.put('/', (req, res) => {
    res.send('Hello PUT')
});
app.patch('/', (req, res) => {
    res.send('Hello PATCH')
});
app.delete('/', (req, res) => {
    res.send('Hello DELETE')
});


app.listen(3000, () => { console.log('listening on port 3000'); });
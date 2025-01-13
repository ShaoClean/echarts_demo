const express = require('express');
const app = express();

const arr = [];

app.use('/', (req, res) => {
    arr.push([arr.length + 1, Math.random(0, 1).toFixed(2)]);
    res.send(arr);
});

app.listen(3000, () => {
    console.log('backend start at port 3000');
});

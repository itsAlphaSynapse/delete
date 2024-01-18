const express = require('express');
const app = express();
require('dotenv').config()

const path = require('path')
app.use(express.static(path.join(__dirname, 'client/build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(process.env.PORT, () => console.log(`Server is listning on http://localhost:${process.env.PORT}`))

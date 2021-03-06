const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json()); // request: parse body to json
app.use(express.urlencoded({ extended: true }));

let APIs = require('./api/index');
app.use('/api', APIs);

app.use((req, res) => {
    res.status(404).json({ message: `[404] Not Found` });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})



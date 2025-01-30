const express = require('express');
const app = express();
const moment = require('moment');
moment().format();

const PORT = 3001;

app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.get('/info', (req, res) => {
    const date = moment().toISOString();
    const studentData = {
        email: 'ohwo.okoro@yahoo.com',
        current_datetime: date,
    }
    res.json(studentData)
});

// Correctly specify the port in the listen method
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

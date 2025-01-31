const express = require('express');
const app = express();
const cors = require('cors');
const moment = require('moment');
moment().format();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.get('/info', cors(), (req, res) => {
    const date = moment().toISOString().substring(0, 19) + 'Z';
    const studentData = {
        email: 'ohwo.okoro@yahoo.com',
        current_datetime: date,
        github_url: 'https://github.com/Slimobedsama/hng_12_task_0'
    }
    res.json(studentData)
});


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

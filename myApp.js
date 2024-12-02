import express from 'express';
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('This is POC for the RAPID Web Application. Changed to test webhook');
});

app.listen(port, () => {
    console.log(`Visit http://localhost:${port} to view the Application.`);
});
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { log } = require('console');
const app = express();
const port = 3000; 

let questions = [];
let points = 0;

app.use(express.json());
app.use(cors());

app.get('/getQuestions', (req, res) => {
    fs.readFile('./pages/quiz/questionList.json', 'utf8', (error, data) => {
        if (error) {
            res.status(500).send("Erreur lors de la lecture du fichier");
            return;
        }
        try {
            const obj = JSON.parse(data);
            res.json(obj);
        } catch (parseError) {
            res.status(500).send("Erreur lors de l'analyse du JSON");
        }
    });
});

app.post('/saveQuestions', (req, res) => {
    questions = req.body; 
    console.log(req.body);
    res.send("Questions sauvegardées avec succès");
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});

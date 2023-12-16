const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/text-bison-001";
const API_KEY = process.env.REACT_APP_BARD_API_KEY;

app.use(express.json());
app.use(cors());

const port = 8000;

/* Post request to receive current user prompt, send to PaLM API and return the response to the user.*/
app.post('/prompt', async (req, res) => {
    try {
        const { prompt } = req.body;

        const client = new TextServiceClient({
            authClient: new GoogleAuth().fromAPIKey(API_KEY),
        });

        client.generateText({
            model: MODEL_NAME,
            prompt: {
                text: prompt
            },
        })
        .then((result) => {
            const response = result[0]?.candidates[0]?.output;

            res.status(200).json({ 
                message: 'Prompt received successfully',
                response: response
            });
        })
        .catch((error) => {
            console.error('Error processing prompt:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
    } 
    catch (error) {
        console.error('Error processing prompt:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
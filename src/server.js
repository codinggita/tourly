const express = require('express');
const bodyParser = require('body-parser');
const inquirer = require('inquirer');

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/inquire', async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Question is required' });
  }

  try {
    const answer = await inquirer.prompt([
      {
        type: 'input',
        name: 'response',
        message: question,
      },
    ]);

    res.json({ answer: answer.response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

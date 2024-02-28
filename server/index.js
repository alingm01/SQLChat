import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors({origin: '*'}));

const PORT = process.env.PORT || 3005;

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.post('/generate', async (req, res) => {
   const { queryDescription } = req.body;
   console.log(queryDescription)
   res.json({ answer : 'Answer goes here'})
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
});
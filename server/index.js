import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors({origin: '*'}));

const PORT = process.env.PORT || 3005;

app.get('/', (req, res) => {
  res.send("Hello World");
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
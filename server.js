import express from 'express';

const app = express();

app.use(express.json());

app.use(express.static('front-end/public'));

app.use('/api', routes);

app.listen(3000, () => {console.log("Server starting")})


import express from 'express';

const app = express();

app.use(express.static('front-end/public'));

app.listen(3000, () => {console.log("Server starting")})


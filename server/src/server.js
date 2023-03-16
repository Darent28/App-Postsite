import express from 'express';
import cors from 'cors';

import usersRoutes from './routes/users.routes.js';
import indexRoutes from './routes/index.routes.js';


const app = express()


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html');
})


app.use(usersRoutes)
app.use(indexRoutes)

app.listen(5000, () => { console.log("Server started at http://localhost:5000") });

export default app;
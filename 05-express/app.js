import express from 'express';
import { middlewareCors } from './middleware/cors.js';
import { jobsRouter } from './Routes/jobs.js';

import { DEFAULT } from './config.js';

// estos son los origenes aceptados


const PORT = process.env.PORT || DEFAULT.PORT;
const app = express();

app.use(middlewareCors());
app.use(express.json()) // esto es un middleware que se encarga de parsear el body de las peticiones que llegan al servidor, para que podamos acceder a ellos desde req.body

app.use('/jobs', jobsRouter) 

if(process.env.NODE_ENV !== 'production') {
app.listen(PORT, () => {

    console.log(`servidor levantado en http://localhost:${PORT}`);
})
}

export default app
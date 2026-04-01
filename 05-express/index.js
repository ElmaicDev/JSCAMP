import express from 'express';
import jobs from './jobs.json' with {type: 'json'}
import { DEFAULT } from './config.js';

const PORT = process.env.PORT || DEFAULT.PORT;
const app = express();

    


//Acá el middleware se ejecuta antes de que se ejecute cualquier ruta, por lo tanto, se ejecutará para cada petición que llegue al servidor
app.use((req,res, next) => {
    const timeString = new Date().toLocaleDateString()
    console.log(`[${timeString}] ${req.method} ${req.url}`);
    next();
})

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/health', (req, res) => {
    return res.json({
        status: 'ok',
        uptime: process.uptime()
    })
})

app.get('/get-jobs', (req, res)=> {
    const {text, title, level, limit = DEFAULT.LIMIT_PAGINATION, tecnology, offset = DEFAULT.LIMIT_OFFSET} = req.query;
    
    let filteredJobs = jobs
    if(text) {
        const searchTerm = text.toLowerCase();
        filteredJobs = filteredJobs.filter(job =>{
            job.titulo.toLowerCase().includes(searchTerm) || job.descripcion.toLowerCase().includes(searchTerm)
        })
    }

    if(tecnology){
        const searchTerm = tecnology.toLowerCase();
        filteredJobs = filteredJobs.filter(job => job.tecnologias.some(tech => tech.toLowerCase().includes(searchTerm)))
    }

    const limitNumber = Number(limit)
    const offsetNumber = Number(offset)

    const paginatedJobs = filteredJobs.slice(offsetNumber, offsetNumber + limitNumber)
    return res.json(paginatedJobs)
})

app.get('/get-job/:id', (req, res) => {
    const { id } = req.params;
    return res.json({
        job: {
            id,
            title: ' job with id ' + id,

        }
    })
})

// Ruta Opcional -> /acd o /abcd
app.get('/a{b}cd', (req, res) => {
    return res.send('Ruta opcional');
})

// Ruta con comodín -> /abxcd, /ab123cd, etc., es sobre todo para rutas que son largas
app.get('/ab*cd', (req, res) => {
    return res.send('Ruta con comodín');
})

//Rutas con regex - toda ruta que termina en fly
app.get(/.*fly$/, (req, res) => {
    return res.send('Ruta con regex');
})




app.listen(PORT, () => {

    console.log(`servidor levantado en http://localhost:${PORT}`);
})
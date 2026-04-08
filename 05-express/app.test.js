import {test, describe, before, after} from 'node:test';
import  assert  from 'node:assert';
import app from './app.js';

let server

const PORT = 3456
const BASE_URL = `http://localhost:${PORT}`


// Antes de todos los tests, se ejecuta una vez para levantar el servidor
before(async () => {

    return new Promise((resolve,reject) => {
        server = app.listen(PORT, () => resolve()) // si el servidor se levanta sin errores
        server.on('error', reject) // si el servidor tiene un error
    })
})





// Después de todos los tests, se ejecuta una vvez para cerrar el servidor
after(async ()=>{
    return new Promise((resolve,reject) => {
        server.close((err) => {
            if(err) return reject(err)
            resolve()
        })
    })
})

describe('GET /jobs', () => {

    test('Debe responder con 200 y un array de jobs', async()=>{
        const response = await fetch(`${BASE_URL}/jobs`)
        assert.strictEqual(response.status, 200)
        const json = await response.json()
        assert.ok(Array.isArray(json.data), 'La respuesta debe ser un array')
    })

    test('debe filtrar trabajos por tecnología', async () => {
        const tech = 'react'
        const response = await fetch(`${BASE_URL}/jobs?technology=${tech}`)
        assert.strictEqual(response.status, 200)

        const json = await response.json()
        assert.ok(
            json.data.every(job => job.data.technology.includes(tech)),
            `Todos los trabajos deben incluir la tecnología ${tech}`
        )
    })
})
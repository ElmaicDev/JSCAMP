import { createServer } from "node:http";

process.loadEnvFile() // Carga las variables de entorno desde el archivo .env

const PORT = process.env.PORT ?? 3000;

if(req.url === "./"){

    const server = createServer((req,res) => {
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.end("hola desde node 🦖")
    })
}
if(req.url === "./health"){
    return res.status(200).json({status: "ok", uptime: process.uptime()})
}

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
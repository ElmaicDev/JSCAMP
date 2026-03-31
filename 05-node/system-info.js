import os from "node:os"
import ms from "ms"

console.log("Información del sistema operativo:")
console.log("Nombre del sistema operativo:", os.type())
console.log("Plataforma:", os.platform())
console.log("Arquitectura:", os.arch()) 
console.log("Memoria total (GB):", (os.totalmem() / (1024 ** 3)).toFixed(2))
console.log("Memoria libre (GB):", (os.freemem() / (1024 ** 3)).toFixed(2))
console.log("Directorio de inicio:", os.homedir())
console.log("Tiempo de actividad (horas):", ms((os.uptime() * 1000)))
console.log("Información de la CPU:", os.cpus()[0].model)
console.log("Número de interfaces de red:", Object.keys(os.networkInterfaces()).length)

// Información adicional
console.log("Número de CPU:", os.cpus().length)
console.log('Hostname:', os.hostname())
console.log('version del sistema operativo:', os.release())

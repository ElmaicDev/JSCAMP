import { mkdir } from 'node:fs/promises'
import {readFile, writeFile} from 'node:fs/promises'
import {join, extname, basename} from "path"

if(process.permission.has('fs.read'),'./'){
const content = await readFile('./file.txt', 'utf-8')
console.log(content)
}

if(process.permission.has('fs.write'),'./'){
    const upperCaseContent = content.toUpperCase()
    const outputPath = join('file-uppercase.txt')
    await writeFile(outputPath, upperCaseContent)
}

console.log("la extensión es: ", extname(outputPath))
console.log("el nombre del archivo es: ", basename(outputPath))

console.log('uppercase content',content) 

const outputDir = join('outputFile')
await mkdir(outputDir, {recursive: true})
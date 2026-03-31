# NODE JS

En node js existen dos sistemas de carga principales: 

1. CommonJS: usa require() de forma síncrona y module.exports.
2. ES Modules (ESM): Import/export como en react

## Tipo de sistema de carga

Para escoger el tipo de sistema de carga, se debe poner dentro de package.json: 

```json
{

    "type": "common" o "module"

}
```

Node js permite controlar la creación de archivos y ficheros en el sistema operativo del cliente. Por lo que puede ser peligroso si no se configuran bien los permisos de la app.

## System Management

Para leer un archivo se usa:

```javascript
import{readFile}from'node:fs/promises'
```

Para escribir una línea se usa: 

```javascript
import {readFile, writeFile} from 'node:fs/promises'

const content = await readFile('./file.txt', 'utf-8')
console.log(content)

const upperCaseContent = content.toUpperCase()
await writeFile('./file-uppercase.txt', upperCaseContent)
console.log('uppercase content',content) 
```

Para crear una carpeta: 

```javascript
import {readFile, writeFile} from 'node:fs/promises'
const content = await readFile('./file.txt', 'utf-8')
console.log(content)

const upperCaseContent = content.toUpperCase()
await writeFile('./file-uppercase.txt', upperCaseContent)
console.log('uppercase content',content)

const outputDir = 'outputFile/files/documents'
await mkdir(outputDir, {recursive: true})
```


Para trabajar con cualquier ruta, en cualquier sistema operativo, se usa join, y para leer su extensión y encontrar su nombre se usa extname y basename:

```javascript
constoutputPath=join('file-uppercase.txt')

awaitwriteFile(outputPath, upperCaseContent)

console.log("la extensión es: ", extname(outputPath))

console.log("el nombre del archivo es: ", basename(outputPath))
```


## Información Del Sistema Operativo.

Se puede usar importando de node:os

## Importaciones

### El símbolo misterioso en las versiones: el caret (^)

Después de instalar un paquete, es muy habitual ver algo así en el `package.json`:

```
{
  "dependencies": {
    "ms": "^2.3.2"
  }
}Copiar
```

Ese simbolito `^` no está ahí porque sí. Se llama  **caret** .

Qué es el caret (^)

El caret indica un  **rango de versiones permitidas** , no una versión exacta. Está directamente relacionado con el **versionado semántico** o  **SemVer** .

#### Qué es el versionado semántico (SemVer)

Las versiones siguen este formato estándar: `major.minor.patch`. Ejemplo: `2.3.2`

* 🔴  **Major** : Cambios grandes y *breaking changes* (rompen la compatibilidad).
* 🟡  **Minor** : Nuevas funcionalidades compatibles.
* 🟢  **Patch** : Correcciones de bugs o parches de seguridad.

En teoría:

* Cambiar el **Major** puede romper tu código.
* Cambiar el **Minor** añade cosas sin romper.
* Cambiar el **Patch** solo arregla problemas.

> **La realidad:** En la práctica, no siempre se respeta al 100%, y ahí vienen los problemas. Un cambio en la versión *minor* podría introducir un bug inesperado o un cambio de comportamiento que no tenías previsto.
>

#### Qué significa exactamente `^2.3.2`

El caret delante de una versión quiere decir:

> “Se permite cualquier versión mayor o igual a  **2.3.2** , siempre que sea menor que  **3.0.0** .”
>

para controlar qué versión quieres y evitar ataques, es mejor siempre quitar el caret.


## Sistemas de permisos en node.

Permite ejecutar un programa con acceso restringido a los recursos que se deseen. Y para activarlo solo se necesita poner una flag cuando se ejecute: 

node --permission archivo.js

permiso de lectura. No es la forma correcta, en lugar del asterisco que indica todo, se le da permiso específico.

node --permission --allow-fs-read="*" manage-files.j
s

Permisos de lectura y escritura.

```bash
node --permission --allow-fs-read="./file.txt" --all
ow-fs-write="./*" manage-files.js
```


se puede chequear permisos en código:

```javascript
if(process.permission.has('fs.read'),'./'){

constcontent=awaitreadFile('./file.txt', 'utf-8')

console.log(content)

}

if(process.permission.has('fs.write'),'./'){

    constupperCaseContent= content.toUpperCase()

    constoutputPath=join('file-uppercase.txt')

    awaitwriteFile(outputPath, upperCaseContent)

}
```


## Programas CLI

Se puede crear un propio ls para listar archivos con sus respectivos tamaños.

## Servidor y watch 

para esto se debe importar createServer de node:http

node --watch server.js

PARA QUE EL SERVIDOR SE REINICIE CUANDO DETECTE UN CAMBIO.

### Cambiar de puerto con variables de entorno

Las variables de entorno son variables que están a nivel de sistema operativo donde estamos ejecutando nuestro proceso. Nos permite cambiar alguna ejecución interna desde fuera y sin necesidad de tocar código poder configurarlo.

# EXPRESS

Se inicia con npm -y para que se inicie con lo mínimo.

y luego se instala express con npm install express

## REST API

No todas las apis son rest.

Representational State Transfer: Es un estilo de arquitectura para generar APIs que es coherente y predescible.

Cada URL debe representar un recurso. Cada recurso debe tener una URL única y el método http decide qué hacer con el recurso.

Para que sea REST cada petición hace una cosa independiente.

También se debe cumplir que sea idenpotente, es decir que si una operación se hace una o 10 veces deja el sistema en el mismo estado final. Ejemeplo, si se ejecuta get 1000 veces el sistema es igual.

El post es idempotente, el put sí.

## CRUD

CREATE

READ

UPDATE

DELETE

Para hacer post se debe hacer un curl de la siguiente forma:

curl -POST http://localhost:port/endpoint \

-H "Content-Type: application/json" \

-d '{

"key": "value"

}'

Para parsear el body para que pueda usar un json, se requiere un middleware, que ya tiene por defecto el express

## CORS

Es un problema del backend, o el servidor. Sus siglas son Cross Origin Resource Sharing. Es un mecanismo de seguridad del navegador. Evita que un sitio web malicioso haga una petición a otro sitio sin ningún tipo de permiso a tu nombre.

Un origen distinto lo evita a nivel de dominio (http o https) y puerto y protocolo.

Este paquete es un middleWare

## PATRÓN MVC

Todo en el mismo index.js entonces se debe separar. Para usar Modelo Vista Controlador.

- Modelo: Lógica de datos, comunicación con base de datos, archivos json.
- Vista: json devuelto al cliente (html, json, xml)
- Controlador: Intermediario recibe la petición http y usa el modelo para manipular los datos.

# DESPLIEGUE DE API EN VERCEL

En vercel se puede desplegar proyectos de express sumamente fácil y tiene una capa gratuita generosa (02042026)

* VERCEL ES AUTOESCALABLE
* ROLLBACKS INSTANTÁNEO

Para desplegar express se deben seguir unos pasos específicos:

1. Exportar por defecto app. de app.js
2. app.listen solo se usa en desarrollo, no en producción entonces se debe meter a un condicional. Para esto se deben crear también las variables de entorno. De development o production.
3. Instalar la línea de comandos de vercel.
   con npm i -g vercel
4. Usar en la línea de comandos de vercel: vercel login
5. Te pedirá autenticación de tu cuenta.

import cors from 'cors'

const ACCEPTED_ORIGINS = ['http://localhost:5173']

export const middlewareCors = ({
    acceptedOrigins = ACCEPTED_ORIGINS} = {}) => {
       return cors({
            origin: (origin, callback) => {
            if(ACCEPTED_ORIGINS.includes(origin)) {
                return callback(null, true)
            }
            if(!origin){
                return callback(null, true) // esto permite que se envíe desde localhost o postman, porque cors no lo manejar como un origen, sino como una petición directa. Si no se hace esto, no se podrían hacer peticiones desde postman o localhost.
            }
            return callback(new Error('Origen no permitido'))
        }
    })
}


// si se usa cors con * todo el mundo la puede usar.
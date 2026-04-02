import cors from 'cors'

const ACCEPTED_ORIGINS = ['http://localhost:5173', 'http://localhost:1234']

export const middlewareCors = ({
    acceptedOrigins = ACCEPTED_ORIGINS} = {}) => {
       return cors({
            origin: (origin, callback) => {
            if(ACCEPTED_ORIGINS.includes(origin)) {
                return callback(null, true)
            }
            return callback(new Error('Origen no permitido'))
        }
    })
}


// si se usa cors con * todo el mundo la puede usar.
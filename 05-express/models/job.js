import jobs from '../jobs.json' with {type: 'json'}

export class JobModel {
    static async getAll({text, title, level, limit = DEFAULT.LIMIT_PAGINATION, technology, offset = DEFAULT.LIMIT_OFFSET}){

        let filteredJobs = jobs
            if(text) {
                const searchTerm = text.toLowerCase();
                filteredJobs = filteredJobs.filter(job =>{
                    job.data.titulo.toLowerCase().includes(searchTerm) || job.descripcion.toLowerCase().includes(searchTerm)
                })
            }
        
            if(technology){
                const searchTerm = technology.toLowerCase();
                filteredJobs = filteredJobs.filter(job => job.data.technology.some(tech => tech.toLowerCase().includes(searchTerm)))
            }
        
            const limitNumber = Number(limit)
            const offsetNumber = Number(offset)
        
            const paginatedJobs = filteredJobs.slice(offsetNumber, offsetNumber + limitNumber)

            return {data: paginatedJobs,
                    total: filteredJobs.length,
                    limit: limitNumber,
                    offset: offsetNumber

            }
    }

    static async create({titulo, empresa, ubicacion, data}){
        const newJob = {
            id: crypto.randomUUID(),
            titulo,
            empresa,
            ubicacion,
            data
        }
        jobs.push(newJob) // esto se hará en la base de datos.
        return newJob
    }
}
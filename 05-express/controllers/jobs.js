import jobs from '../jobs.json' with {type: 'json'}
import { JobModel } from '../models/job.js';
import { DEFAULT } from '../config.js';

export class jobController {

    static async getAll(req, res){
        const {text, title, level, limit = DEFAULT.LIMIT_PAGINATION, tecnology, offset = DEFAULT.LIMIT_OFFSET} = req.query;
        const paginatedJobs = await JobModel.getAll({text, title, level, limit, tecnology, offset})    
        return res.json(paginatedJobs)
    }

    static async getById(req, res){
        const { id } = req.params;
            const job = jobs.find(job => job.id === id);
            if(!job) {
                return res.status(404).json({error: 'Job not found'})
            }
        
            return res.json(job)
    }

    static async create(req, res){
        const {titulo, empresa, ubicacion, data} = req.body
        
        const newJob = await JobModel.create({titulo, empresa, ubicacion, data})

        return res.status(201).json(newJob)
    }
}
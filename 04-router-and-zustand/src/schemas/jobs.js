import * as z from 'zod'

const jobSchema = z.object({
    titulo: z.string({
        error: 'El titulo es obligatorio'
    })
    .min(1, 'El titulo debe tener al menos 3 caracteres')
    .max(100,'El titulo no puede exceder los 100 caracteres'),
    empresa: z.string(),
    ubicacion: z.string,
    description: z.string().optional(),
    data: z.object({
        technology: z.array(z.string()),
        modalidad: z.string(),
        level: z.string()
    })

})

export function validateJob(input){
    return jobSchema.safeParse(input)
}

export function validatePartialJob(input){
    return jobSchema.partial().safeParse(input)
}

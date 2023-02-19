import { z, defineCollection } from 'astro:content'

const dogCollection = defineCollection({
    schema: z.object({
        name: z.string(),
        nickNames: z.array(z.string()),
        isFemale: z.boolean(),
        hasOwner: z.boolean().default(false),
    }),
})

const problemCollection = defineCollection({
    schema: z.object({
        icon: z.string(),
        heading: z.string(),
        order: z.number(),
        class: z.string().optional(),
    }),
})

const solutionCollection = defineCollection({
    schema: z.object({
        icon: z.string(),
        heading: z.string(),
    }),
})

export const collections = {
    dogs: dogCollection,
    problems: problemCollection,
    solutions: solutionCollection,
}

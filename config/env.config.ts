import { z } from "zod"
import dotenv from "dotenv"
dotenv.config()

const envSchema = z.object({
    NODE_ENV: z.enum(["development", "test", "production"]).default("production"),
    PORT: z.coerce.number().default(3000),
    DATABASE_URL: z.string(),
})

const parsedEnv = envSchema.safeParse(process.env)

if(!parsedEnv.success) {
    console.error("Invalid environment variables", parsedEnv.error)
    process.exit(1)
}
console.log("Environment variables are parsed Successfully")
export const env = parsedEnv.data
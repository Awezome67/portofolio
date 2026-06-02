import { defineConfig } from '@prisma/config'
import * as dotenv from 'dotenv'

// Paksa agar variabel di file .env terbaca oleh sistem
dotenv.config()

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
    // use shadowDatabaseUrl for migrations when using a separate database
    shadowDatabaseUrl: process.env.DIRECT_URL,
  },
})
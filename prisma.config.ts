import { defineConfig } from '@prisma/config'
import * as dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  // Tambahkan bagian migrations di bawah ini:
  migrations: {
    // Gunakan 'ts-node ./prisma/seed.ts' jika kamu menggunakan npm/Node.js biasa
    seed: 'npx tsx ./prisma/seed.ts', 
  },
  datasource: {
    url: process.env.DIRECT_URL,
  },
})
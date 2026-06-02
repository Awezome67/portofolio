import { defineConfig } from '@prisma/config'
import * as dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  datasource: {
    // Paksa db push pakai DIRECT_URL di lokal agar tidak gantung/stuck
    url: process.env.DIRECT_URL, 
  },
})
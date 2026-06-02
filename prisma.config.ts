import { defineConfig } from '@prisma/config'

export default defineConfig({
  datasource: {
    // URL Pooler (6543) untuk kebutuhan aplikasi sehari-hari
    url: process.env.DATABASE_URL,
    // URL Direct (5432) yang diambil dari menu ORM Supabase untuk kebutuhan migrasi/db push
    shadowDatabaseUrl: process.env.DIRECT_URL,
  },
})
-- Restored: rename legacy "path" column to "iconUrl" (matches Prisma schema)
DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM pg_attribute a
    JOIN pg_class c ON a.attrelid = c.oid
    JOIN pg_namespace n ON c.relnamespace = n.oid
    WHERE n.nspname = 'public'
      AND c.relname = 'Skill'
      AND a.attname = 'path'
      AND NOT a.attisdropped
  ) AND NOT EXISTS (
    SELECT 1
    FROM pg_attribute a
    JOIN pg_class c ON a.attrelid = c.oid
    JOIN pg_namespace n ON c.relnamespace = n.oid
    WHERE n.nspname = 'public'
      AND c.relname = 'Skill'
      AND a.attname = 'iconUrl'
      AND NOT a.attisdropped
  ) THEN
    ALTER TABLE "Skill" RENAME COLUMN "path" TO "iconUrl";
  END IF;
END $$;

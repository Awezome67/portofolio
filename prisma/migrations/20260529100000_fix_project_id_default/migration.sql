-- Restore auto-increment default for Project.id (sequence exists but default was missing)
ALTER TABLE "Project" ALTER COLUMN "id" SET DEFAULT nextval('"Project_id_seq"');

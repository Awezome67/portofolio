/**
 * Optional: resets all tables with placeholder data.
 * For manual content, use Prisma Studio instead — see prisma/FILL_YOUR_CONTENT.md
 */
import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  // ——— Profile (one row) ———
  await prisma.profile.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: "Your Name", // FILL
      headline: "Informatics Student", // FILL
      bio: "Your about-me text here.", // FILL
      email: "you@example.com", // FILL (optional)
      location: "Your city", // FILL (optional)
      imageUrl: "/images/profile/profile.png", // FILL if you use another photo
    },
  });

  // ——— Social links ———
  const socials = [
    {
      platform: "GitHub", // FILL
      url: "https://github.com/yourusername", // FILL
      iconUrl: "/images/socials/github.svg",
      order: 0,
    },
    {
      platform: "LinkedIn", // FILL
      url: "https://linkedin.com/in/yourusername", // FILL
      iconUrl: "/images/socials/linkedin-outline-svgrepo-com.svg",
      order: 1,
    },
    {
      platform: "Instagram", // FILL (add/remove rows as needed)
      url: "https://instagram.com/yourusername", // FILL
      iconUrl: "/images/socials/instagram.svg",
      order: 2,
    },
  ];

  await prisma.socialLink.deleteMany();
  await prisma.socialLink.createMany({ data: socials });

  // ——— Skills ———
  const skills = [
    { name: "JavaScript", iconUrl: "/images/tech/javascript.svg", category: "Languages", order: 0 }, // FILL: add/remove skills
    { name: "HTML5", iconUrl: "/images/tech/html5.svg", category: "Languages", order: 1 },
    { name: "CSS", iconUrl: "/images/tech/css.svg", category: "Languages", order: 2 },
    { name: "Java", iconUrl: "/images/tech/java-svgrepo-com.svg", category: "Languages", order: 3 },
    { name: "Kotlin", iconUrl: "/images/tech/kotlin.svg", category: "Languages", order: 4 },
    { name: "PostgreSQL", iconUrl: "/images/tech/postgresql.svg", category: "Databases", order: 5 },
    { name: "MySQL", iconUrl: "/images/tech/mysql.svg", category: "Databases", order: 6 },
    { name: "Firebase", iconUrl: "/images/tech/firebase.svg", category: "Tools", order: 7 },
    { name: "Linux", iconUrl: "/images/tech/linux2.svg", category: "Tools", order: 8 },
  ];

  await prisma.skill.deleteMany();
  await prisma.skill.createMany({ data: skills });

  // ——— Experience ———
  const experiences = [
    {
      title: "Your role", // FILL
      organization: "Organization name", // FILL
      location: "Location", // FILL (optional)
      description: "What you did.", // FILL
      startDate: new Date("2024-01-01"), // FILL
      endDate: null, // FILL: set a date or null if ongoing
      isCurrent: true, // FILL
      order: 0,
    },
  ];

  await prisma.experience.deleteMany();
  await prisma.experience.createMany({ data: experiences });

  // ——— Projects ———
  const projects = [
    {
      title: "Project title", // FILL
      description: "Project description.", // FILL
      imageUrl: "/images/projects/event-platform.svg", // FILL
      githubUrl: "https://github.com/yourusername/repo", // FILL
      liveUrl: null, // FILL: demo URL or null
      techStack: ["Next.js", "PostgreSQL"], // FILL
      featured: true, // FILL
      order: 0,
    },
  ];

  await prisma.project.deleteMany();
  await prisma.project.createMany({ data: projects });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

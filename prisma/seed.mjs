import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL || "admin@packbeyond.com";
  const password = process.env.ADMIN_PASSWORD || "ChangeMe123!";

  const existing = await prisma.adminUser.findUnique({ where: { email } });
  if (existing) {
    console.log(`Admin user already exists: ${email}`);
    return;
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await prisma.adminUser.create({ data: { email, passwordHash } });
  console.log(`Created admin user: ${email}`);
  console.log(`Log in at /admin/login, then change the password from /admin/settings.`);
}

async function seedBlog() {
  const count = await prisma.blogPost.count();
  if (count > 0) return;

  const posts = [
    {
      title: "The future of printing: innovations and trends",
      category: "Resources",
      excerpt:
        "How digital, sustainable and smart-packaging trends are reshaping the printing industry.",
      content:
        "Printing technology keeps evolving — from eco-friendly inks to smart packaging that connects to apps. Here's what's changing and what it means for brands choosing packaging partners today.",
      coverImage: "/read-our-latest-the-feature-printing.jpg",
    },
    {
      title: "Printing essentials: choosing the right paper and ink",
      category: "News",
      excerpt:
        "A practical guide to picking paper stock and ink types for different packaging needs.",
      content:
        "Paper weight, finish and ink type all affect how your packaging looks, feels and performs. This guide breaks down the essentials so you can brief your printer with confidence.",
      coverImage: "/read-our-latest-printing-essential.jpg",
    },
    {
      title: "Color theory in printing: creating stunning visuals",
      category: "News",
      excerpt:
        "Why color choice matters for shelf presence, brand recall and customer trust.",
      content:
        "Color is one of the fastest ways a product communicates with a shopper. This article walks through color theory basics and how to apply them to packaging design.",
      coverImage: "/read-our-latest-color-everything.jpg",
    },
    {
      title: "Custom printing projects: bringing your ideas to life",
      category: "Articles",
      excerpt:
        "From concept sketch to finished packaging — a look at our custom project workflow.",
      content:
        "Every custom project starts with a conversation about your product, audience and budget. Here's how that conversation turns into a finished, production-ready design.",
      coverImage: "/read-our-latest-custom-printing.jpg",
    },
    {
      title: "Eco-friendly printing: sustainable practices for a greener world",
      category: "Resources",
      excerpt:
        "Sustainable material and ink choices that don't compromise on quality or shelf appeal.",
      content:
        "Sustainability doesn't have to mean sacrificing design quality. We cover recyclable substrates, soy-based inks, and how to reduce material waste in packaging production.",
      coverImage: "/read-our-latest-ecco-friendly.jpg",
    },
  ];

  for (const post of posts) {
    const slug = post.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    await prisma.blogPost.create({ data: { ...post, slug, published: true } });
  }

  console.log(`Seeded ${posts.length} blog posts.`);
}

async function seedGallery() {
  const count = await prisma.galleryImage.count();
  if (count > 0) return;

  const images = [
    { category: "Packaging Solutions", imageUrl: "/gallery/labelling-1.jpg" },
    { category: "Packaging Solutions", imageUrl: "/gallery/mono-carton-1.jpg" },
    { category: "Packaging Solutions", imageUrl: "/gallery/rigid-boxes-1.jpg" },
    { category: "Packaging Solutions", imageUrl: "/gallery/corrugated-boxes-1.jpg" },
    { category: "Our Work", imageUrl: "/gallery/branding-1.jpg" },
    { category: "Our Work", imageUrl: "/gallery/mono-carton-2.jpg" },
    { category: "Our Work", imageUrl: "/gallery/labelling-2.jpg" },
    { category: "Behind the Scenes", imageUrl: "/gallery/branding-process-1.jpg" },
    { category: "Innovation & Materials", imageUrl: "/gallery/innovation-1.jpg" },
  ];

  for (const image of images) {
    await prisma.galleryImage.create({ data: image });
  }

  console.log(`Seeded ${images.length} gallery images.`);
}

async function main() {
  await seedAdmin();
  await seedBlog();
  await seedGallery();
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

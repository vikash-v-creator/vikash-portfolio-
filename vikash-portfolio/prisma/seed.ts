import { PrismaClient } from "@prisma/client";
import {
  STATS,
  SERVICES,
  PORTFOLIO_PROJECTS,
  SKILLS,
  PROCESS_STEPS,
  TESTIMONIALS,
  PRICING,
  WHY_HIRE_ME,
  FAQS,
  PHILOSOPHY_CARDS,
  DESK_ITEMS,
} from "../src/lib/constants";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Clear existing
  await prisma.stat.deleteMany();
  await prisma.service.deleteMany();
  await prisma.project.deleteMany();
  await prisma.skillCategory.deleteMany();
  await prisma.processStep.deleteMany();
  await prisma.testimonial.deleteMany();
  await prisma.pricingPlan.deleteMany();
  await prisma.whyHireMe.deleteMany();
  await prisma.faq.deleteMany();
  await prisma.philosophyCard.deleteMany();
  await prisma.deskItem.deleteMany();

  // 1. STATS
  for (const stat of STATS) {
    await prisma.stat.create({
      data: {
        value: stat.value,
        suffix: stat.suffix,
        label: stat.label,
      },
    });
  }

  // 2. SERVICES
  for (const service of SERVICES) {
    await prisma.service.create({
      data: {
        id: service.id,
        icon: service.icon,
        accentColor: service.accentColor,
        title: service.title,
        tagline: service.tagline,
        description: service.description,
        features: JSON.stringify(service.features),
      },
    });
  }

  // 3. PORTFOLIO_PROJECTS
  for (const project of PORTFOLIO_PROJECTS) {
    await prisma.project.create({
      data: {
        id: project.id,
        title: project.title,
        category: project.category,
        tags: project.tags.join(", "),
        accentColor: project.accentColor,
        size: project.size,
        year: project.year,
        client: project.client,
        challenge: project.challenge,
        process: project.process,
        tools: project.tools.join(", "),
        result: project.result,
        impact: project.impact,
        outcome: project.outcome,
      },
    });
  }

  // 4. SKILLS
  for (const skill of SKILLS) {
    await prisma.skillCategory.create({
      data: {
        category: skill.category,
        color: skill.color,
        tools: JSON.stringify(skill.tools),
      },
    });
  }

  // 5. PROCESS_STEPS
  for (const step of PROCESS_STEPS) {
    await prisma.processStep.create({
      data: {
        id: step.id,
        label: step.label,
        icon: step.icon,
        color: step.color,
        description: step.description,
      },
    });
  }

  // 6. TESTIMONIALS
  for (const t of TESTIMONIALS) {
    await prisma.testimonial.create({
      data: {
        name: t.name,
        role: t.role,
        avatar: t.avatar,
        avatarColor: t.avatarColor,
        text: t.text,
        service: t.service,
        rating: t.rating,
      },
    });
  }

  // 7. PRICING
  for (const p of PRICING.design) {
    await prisma.pricingPlan.create({
      data: { category: "design", name: p.name, price: p.price, popular: p.popular, description: p.description, features: JSON.stringify(p.features) },
    });
  }
  for (const p of PRICING.video) {
    await prisma.pricingPlan.create({
      data: { category: "video", name: p.name, price: p.price, popular: p.popular, description: p.description, features: JSON.stringify(p.features) },
    });
  }
  for (const p of PRICING.web) {
    await prisma.pricingPlan.create({
      data: { category: "web", name: p.name, price: p.price, popular: p.popular, description: p.description, features: JSON.stringify(p.features) },
    });
  }

  // 8. WHY_HIRE_ME
  for (const w of WHY_HIRE_ME) {
    await prisma.whyHireMe.create({
      data: { icon: w.icon, color: w.color, title: w.title, stat: w.stat, description: w.description },
    });
  }

  // 9. FAQS
  for (const faq of FAQS) {
    await prisma.faq.create({
      data: { q: faq.q, a: faq.a },
    });
  }

  // 10. PHILOSOPHY_CARDS
  for (const card of PHILOSOPHY_CARDS) {
    await prisma.philosophyCard.create({
      data: { icon: card.icon, color: card.color, title: card.title, description: card.description, annotation: card.annotation },
    });
  }

  // 11. DESK_ITEMS
  for (const item of DESK_ITEMS) {
    await prisma.deskItem.create({
      data: { id: item.id, icon: item.icon, label: item.label, x: item.x, y: item.y, info: item.info, detail: item.detail },
    });
  }

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

-- CreateTable
CREATE TABLE "Stat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" INTEGER NOT NULL,
    "suffix" TEXT NOT NULL,
    "label" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "icon" TEXT NOT NULL,
    "accentColor" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "features" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "accentColor" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "challenge" TEXT NOT NULL,
    "process" TEXT NOT NULL,
    "tools" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "impact" TEXT NOT NULL,
    "outcome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "SkillCategory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "category" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "tools" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ProcessStep" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Testimonial" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "avatarColor" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "rating" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "PricingPlan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "category" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "popular" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,
    "features" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "WhyHireMe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "icon" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "stat" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Faq" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "q" TEXT NOT NULL,
    "a" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PhilosophyCard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "icon" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "annotation" TEXT
);

-- CreateTable
CREATE TABLE "DeskItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "icon" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "x" REAL NOT NULL,
    "y" REAL NOT NULL,
    "info" TEXT NOT NULL,
    "detail" TEXT NOT NULL
);

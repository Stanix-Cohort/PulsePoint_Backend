require("dotenv").config();
const { PrismaClient } = require("../generated/prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

console.log("Prisma user model:", !!prisma.user);
console.log("Prisma donor model:", !!prisma.donor);
console.log("Prisma hospital model:", !!prisma.hospital);
console.log("Prisma bloodRequest model:", !!prisma.bloodRequest);
console.log("Prisma requestResponse model:", !!prisma.requestResponse);
console.log("Prisma donation model:", !!prisma.donation);

module.exports = prisma;
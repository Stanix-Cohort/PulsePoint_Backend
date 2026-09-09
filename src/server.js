const app = require("./app");
// const prisma = require("./config/prisma");

const port = process.env.PORT || 3000;

 app.listen(port, () => {
  console.log(`Server running on port ${port}`);
 });







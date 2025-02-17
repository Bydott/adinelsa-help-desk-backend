import { config } from "dotenv";
config();
console.log(process.env.DB_USER);

export default {
  port: process.env.PORT || 8000,
  dbUser: process.env.DB_USER || "",
  dbPassword: process.env.DB_PASSWORD || "",
  dbServer: process.env.DB_SERVER || "",
  dbDatabase: process.env.DB_DATABASE || "",
};

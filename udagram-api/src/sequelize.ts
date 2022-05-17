import { Sequelize } from "sequelize-typescript";
import { config, psqlConfig } from "./config/config";

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: config.dbPort as unknown as number,
  dialect: "postgres",
  storage: ":memory:",
});

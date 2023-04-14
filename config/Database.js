import { Sequelize } from "sequelize";

const db = new Sequelize("entpens_mediaent", "root", "calonmertua2002", {
  host: "127.0.0.1",
  dialect: "mysql",
});

export default db;

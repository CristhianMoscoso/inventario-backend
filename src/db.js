import pg from "pg";
const { Pool } = pg;

// Si existe DATABASE_URL, úsala.
// Si no existe, arma la conexión con DB_HOST, DB_USER, etc.
const connectionString =
  process.env.DATABASE_URL ||
  `postgresql://${encodeURIComponent(process.env.DB_USER)}:${encodeURIComponent(
    process.env.DB_PASSWORD
  )}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=require`;

export const pool = new Pool({
  connectionString,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
});





/*
const { Pool } = pkg;

export const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "inventario_db",
  password: String(process.env.DB_PASSWORD || "1234"),   
  port: Number(process.env.DB_PORT || 5432),
});
*/


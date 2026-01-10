import pg from "pg";
const { Pool } = pg;

// Decide si usar SSL por variable (Render) o por producción
const useSSL =
  String(process.env.DB_SSL).toLowerCase() === "true" ||
  process.env.NODE_ENV === "production";

// Construye connectionString: si existe DATABASE_URL úsala; si no arma con DB_*
const connectionString =
  process.env.DATABASE_URL ||
  `postgresql://${encodeURIComponent(process.env.DB_USER)}:${encodeURIComponent(
    process.env.DB_PASSWORD
  )}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

export const pool = new Pool({
  connectionString,
  ssl: useSSL ? { rejectUnauthorized: false } : false,
});


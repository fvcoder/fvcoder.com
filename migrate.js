const { createClient } = require('@libsql/client');
const { config } = require('dotenv');

async function main() {
  try {
    config();

    const libsql = createClient({
      url: process.env.TURSO_DATABASE_URL,
      authToken: process.env.TURSO_AUTH_TOKEN,
    });

    await libsql.executeMultiple(`
    `);
  } catch (error) {
    console.error(error);
  }
}

main();

#! /usr/bin/env node

const { Client } = require("pg");
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS pins (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  pinName VARCHAR ( 255 ),
  lat DECIMAL,
  lng DECIMAL
);

INSERT INTO pins (pinName, lat, lng) 
VALUES
  ('test1', 48.86, 2.3522),
  ('test2', 48.9, 2.3522),
  ('test3', 48.96, 2.3522);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

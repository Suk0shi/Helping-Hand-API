const pool = require("./pool");

async function getAllPins() {
  const { rows } = await pool.query("SELECT * FROM pins");
  return rows;
}

async function insertPin(pin) {
  await pool.query("INSERT INTO pins (pinName, lat, lng) VALUES ($1)", [pin]);
}

async function getSearchPins(pinName) {
  const { rows } = await pool.query("SELECT * FROM pins WHERE username like ($1)", ['%'+pinName+'%']);
  return rows;
}

async function getDeletePin(pinName) {
  await pool.query("DELETE ($1) FROM pins", [pinName]);
}

module.exports = {
  getAllPins,
  insertPin,
  getSearchPins,
  getDeletePin
};

const pool = require("./pool");

async function getAllPins() {
  const { rows } = await pool.query("SELECT * FROM pins");
  return rows;
}

async function getPinName(id) {
  const { rows } = await pool.query("SELECT pinName FROM pins WHERE id = ($1)", [id]);
  return rows;
}

async function insertPin(pin) {
  console.log("INSERT INTO pins (pinName, lat, lng) VALUES ($1, $2, $3)", [pin.name, pin.lat, pin.lng]);
  await pool.query("INSERT INTO pins (pinName, lat, lng) VALUES ($1, $2, $3)", [pin.name, pin.lat, pin.lng]);
}

async function getSearchPins(pinName) {
  const { rows } = await pool.query("SELECT * FROM pins WHERE username like ($1)", ['%'+pinName+'%']);
  return rows;
}

async function getDeletePin(pinName) {
  await pool.query("DELETE ($1) FROM pins", [pinName]);
}

async function getAllContent(id) {
  const { rows } = await pool.query("SELECT * FROM pincontent WHERE pin_id = ($1)", [id]);
  return rows;
}

async function insertContent(content, id) {
  console.log("INSERT INTO pinContent (pin_id, textContent, imgContent, videoContent) VALUES ($1, $2, $3, $4)", [id, content.text, content.photo, content.video]);
  await pool.query("INSERT INTO pinContent (pin_id, textContent, imgContent, videoContent) VALUES ($1, $2, $3, $4)", [id, content.text, content.photo, content.video]);
}

module.exports = {
  getAllPins,
  getPinName,
  insertPin,
  getSearchPins,
  getDeletePin,
  getAllContent,
  insertContent
};

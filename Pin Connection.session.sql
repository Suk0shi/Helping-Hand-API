CREATE TABLE IF NOT EXISTS pinContent (
  content_id SERIAL PRIMARY KEY,
  pin_id INTEGER REFERENCES pins(id) ON DELETE CASCADE,
  textContent VARCHAR ( 255 ),
  imgContent VARCHAR ( 255 ),
  videoContent VARCHAR ( 255 )
);
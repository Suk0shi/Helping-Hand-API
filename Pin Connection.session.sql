CREATE TABLE IF NOT EXISTS pinContent (
  id INTEGER PRIMARY KEY REFERENCES pins(id) ON DELETE CASCADE,
  textContent VARCHAR ( 255 ),
  imgContent VARCHAR ( 255 ),
  videoContent VARCHAR ( 255 )
);
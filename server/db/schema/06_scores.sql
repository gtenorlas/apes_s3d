DROP TABLE IF EXISTS scores CASCADE;

CREATE TABLE
  scores (
    id SERIAL PRIMARY KEY NOT NULL,
    profile_id INT NOT NULL REFERENCES profiles (id) ON DELETE CASCADE,
    war_id INT NOT NULL REFERENCES wars (id) ON DELETE CASCADE,
    score INT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW (),
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
  );

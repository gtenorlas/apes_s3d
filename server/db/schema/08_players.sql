DROP TABLE IF EXISTS players CASCADE;

CREATE TABLE
  players (
    id SERIAL PRIMARY KEY NOT NULL,
    tournament_id INT NOT NULL REFERENCES tournaments (id) ON DELETE CASCADE,
    user_id INT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    profile_id INT NOT NULL REFERENCES profiles (id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW (),
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
  );

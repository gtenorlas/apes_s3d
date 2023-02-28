DROP TABLE IF EXISTS accumulative_matches CASCADE;

CREATE TABLE
  accumulative_matches (
    id SERIAL PRIMARY KEY NOT NULL,
    tournament_id INT NOT NULL REFERENCES tournaments (id) ON DELETE CASCADE,
    war_id INT REFERENCES wars (id) ON DELETE CASCADE,
    round INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW (),
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
  );

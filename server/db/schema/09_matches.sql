DROP TABLE IF EXISTS matches CASCADE;

CREATE TABLE
  matches (
    id SERIAL PRIMARY KEY NOT NULL,
    tournament_id INT NOT NULL REFERENCES tournaments (id) ON DELETE CASCADE,
    player1 INT NOT NULL REFERENCES players (id) ON DELETE CASCADE,
    player2 INT NOT NULL REFERENCES players (id) ON DELETE CASCADE,
    war_id INT REFERENCES wars (id) ON DELETE CASCADE,
    round INT NOT NULL,
    winner INT,
    loser INT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW (),
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
  );

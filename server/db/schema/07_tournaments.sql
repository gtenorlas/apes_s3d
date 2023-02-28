DROP TABLE IF EXISTS tournaments CASCADE;

CREATE TABLE
  tournaments (
    id SERIAL PRIMARY KEY NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    description VARCHAR(4000) NOT NULL,
    title VARCHAR(1000) NOT NULL,
    prizes VARCHAR(1000) NOT NULL,
    sponsors VARCHAR(500) NOT NULL,
    tournament_type_id INT NOT NULL REFERENCES tournament_types (id) ON DELETE CASCADE,
    thumbnail VARCHAR(250) NOT NULL,
    winner INT REFERENCES users (id) ON DELETE CASCADE,
    runner_up INT REFERENCES users (id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW (),
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
  );

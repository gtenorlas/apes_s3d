DROP TABLE IF EXISTS tournament_types CASCADE;

CREATE TABLE
  tournament_types (
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(1000) NOT NULL,
    description VARCHAR(4000) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW (),
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
  );

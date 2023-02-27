DROP TABLE IF EXISTS groups;

CREATE TABLE
  groups (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(250) NOT NULL,
    description VARCHAR(2000) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
  );

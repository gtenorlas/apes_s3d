DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE
  users (
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(250) NOT NULL,
    password VARCHAR(250) NOT NULL,
    first_name VARCHAR(250) NOT NULL,
    last_name VARCHAR(250) NOT NULL,
    gender VARCHAR(250) NOT NULL,
    line_id VARCHAR(250),
    fb_name VARCHAR(250),
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP NOT NULL
  );

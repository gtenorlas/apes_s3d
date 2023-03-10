DROP TABLE IF EXISTS wars CASCADE;

CREATE TABLE
  wars (
    id SERIAL PRIMARY KEY NOT NULL,
    group_id INT NOT NULL REFERENCES groups(id) ON DELETE CASCADE,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    number_of_days INT NOT NULL,
    month INT NOT NULL,
    thumbnail VARCHAR(500),
    created_at TIMESTAMP NOT NULL DEFAULT NOW (),
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
  );

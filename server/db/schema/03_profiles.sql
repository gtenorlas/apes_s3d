DROP TABLE IF EXISTS profiles CASCADE;

CREATE TABLE
  profiles (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INT REFERENCES users (id) ON DELETE CASCADE,
    group_id INT REFERENCES groups (id) ON DELETE CASCADE,
    name VARCHAR(250) NOT NULL,
    s3d_id VARCHAR(250) NOT NULL,
    is_default BOOLEAN DEFAULT false,
    created_at TIMESTAMP NOT NULL DEFAULT NOW (),
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
  );

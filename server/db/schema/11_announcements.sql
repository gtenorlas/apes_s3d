DROP TABLE IF EXISTS announcements CASCADE;

CREATE TABLE announcements (
  id SERIAL PRIMARY KEY NOT NULL,
  users_id INT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  userlevels_id INT NOT NULL REFERENCES userlevels (id) ON DELETE CASCADE,
  message VARCHAR(500),
  created_at TIMESTAMP NOT NULL DEFAULT NOW (),
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP
);

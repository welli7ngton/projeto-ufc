DROP TABLE IF EXISTS users;
-- DROP TABLE IF EXISTS movies;
-- DROP TABLE IF EXISTS purchases;


CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  bio TEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, email, password, bio) VALUES ('joao', 'joao@example.com', 'password1', 'Bio for Joao'), ('maria', 'maria@example.com', 'password2', 'Bio for Maria'), ('jose', 'jose@example.com', 'password3', 'Bio for Jose'), ('ana', 'ana@example.com', 'password4', 'Bio for Ana'), ('carlos', 'carlos@example.com', 'password5', 'Bio for Carlos'), ('fernanda', 'fernanda@example.com', 'password6', 'Bio for Fernanda'), ('roberto', 'roberto@example.com', 'password7', 'Bio for Roberto'), ('patricia', 'patricia@example.com', 'password8', 'Bio for Patricia'), ('lucas', 'lucas@example.com', 'password9', 'Bio for Lucas'), ('juliana', 'juliana@example.com', 'password10', 'Bio for Juliana');



-- CREATE TABLE movies (
--   id INTEGER PRIMARY KEY AUTOINCREMENT,
--   title TEXT NOT NULL,
--   plot TEXT NULL,
--   released TEXT NULL,
--   runtime TEXT NULL,
--   gender TEXT NULL,
--   actors TEXT NULL,
--   director TEXT NULL,
--   poster TEXT NULL,
--   writer TEXT NULL,
--   country TEXT NULL,
--   language TEXT NULL,
--   awards TEXT NULL,
--   imdbRating FLOAT,
--   price FLOAT NOT NULL DEFAULT 25.00,
--   created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE purchases (
--   id INTEGER PRIMARY KEY AUTOINCREMENT,
--   user_id INTEGER,
--   movie_id INTEGER,
--   purchase_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   FOREIGN KEY (user_id) REFERENCES users(id),
--   FOREIGN KEY (movie_id) REFERENCES movies(id)
-- );
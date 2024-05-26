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



CREATE TABLE movies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  plot TEXT NULL,
  released TEXT NULL,
  runtime TEXT NULL,
  gender TEXT NULL,
  director TEXT NULL,
  poster TEXT NULL,
  writer TEXT NULL,
  country TEXT NULL,
  awards TEXT NULL,
  imdbRating FLOAT,
  price FLOAT NOT NULL DEFAULT 25.00,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
 );


INSERT INTO movies (title, plot, released, runtime, gender, director, poster, writer, country, awards, imdbRating, price) 
VALUES 
('Inception', 'A thief who steals corporate secrets through the use of dream-sharing technology.', '2010-07-16', '148 min', 'Action, Sci-Fi, Thriller', 'Christopher Nolan', 'poster1.jpg', 'Christopher Nolan', 'USA', 'Oscar for Best Cinematography', 8.8, 29.99), 
('The Matrix', 'A computer hacker learns from mysterious rebels about the true nature of his reality.', '1999-03-31', '136 min', 'Action, Sci-Fi', 'Lana Wachowski, Lilly Wachowski', 'poster2.jpg', 'Lana Wachowski, Lilly Wachowski', 'USA', 'Oscar for Best Film Editing', 8.7, 24.99), 
('The Shawshank Redemption', 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', '1994-09-23', '142 min', 'Drama', 'Frank Darabont', 'poster3.jpg', 'Stephen King, Frank Darabont', 'USA', 'Nominated for 7 Oscars', 9.3, 19.99), 
('The Godfather', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', '1972-03-24', '175 min', 'Crime, Drama', 'Francis Ford Coppola', 'poster4.jpg', 'Mario Puzo, Francis Ford Coppola', 'USA', 'Oscar for Best Picture', 9.2, 19.99), 
('Pulp Fiction', 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', '1994-10-14', '154 min', 'Crime, Drama', 'Quentin Tarantino', 'poster5.jpg', 'Quentin Tarantino, Roger Avary', 'USA', 'Oscar for Best Original Screenplay', 8.9, 24.99), 
('The Dark Knight', 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.', '2008-07-18', '152 min', 'Action, Crime, Drama', 'Christopher Nolan', 'poster6.jpg', 'Jonathan Nolan, Christopher Nolan', 'USA', 'Oscar for Best Supporting Actor', 9.0, 29.99), 
('Fight Club', 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.', '1999-10-15', '139 min', 'Drama', 'David Fincher', 'poster7.jpg', 'Chuck Palahniuk, Jim Uhls', 'USA', 'Nominated for 1 Oscar', 8.8, 19.99), 
('Forrest Gump', 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.', '1994-07-06', '142 min', 'Drama, Romance', 'Robert Zemeckis', 'poster8.jpg', 'Winston Groom, Eric Roth', 'USA', 'Oscar for Best Picture', 8.8, 19.99);



-- CREATE TABLE purchases (
--   id INTEGER PRIMARY KEY AUTOINCREMENT,
--   user_id INTEGER,
--   movie_id INTEGER,
--   purchase_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   FOREIGN KEY (user_id) REFERENCES users(id),
--   FOREIGN KEY (movie_id) REFERENCES movies(id)
-- );
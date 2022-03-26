CREATE TABLE user(
    UNSIGNED id INT PRIMARY KEY AUTO_INCREMENT,
    content_name VARCHAR(64) NOT NULL
);
CREATE TABLE theme(
    UNSIGNED id INT PRIMARY KEY AUTO_INCREMENT,
    content_name VARCHAR(128) NOT NULL
);
CREATE TABLE category(
    UNSIGNED id INT AUTO_INCREMENT,
    UNSIGNED theme INT,
    content_name VARCHAR(128) NOT NULL,
    PRIMARY KEY(id, theme),
    FOREIGN KEY (theme) REFERENCES theme(id)
);
CREATE TABLE link(
    UNSIGNED id INT AUTO_INCREMENT,
    UNSIGNED user INT,
    UNSIGNED category INT,
    link TEXT NOT NULL,
    content_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id, user, category),
    FOREIGN KEY(user) REFERENCES user(id),
    FOREIGN KEY (category) REFERENCES category(id)
);
CREATE TABLE user_category(
    UNSIGNED category INT,
    UNSIGNED user INT,
    PRIMARY KEY(category, user),
    FOREIGN KEY(category) REFERENCES category(id),
    FOREIGN KEY(user) REFERENCES user(id)
);
CREATE TABLE user_theme(
    UNSIGNED theme INT,
    UNSIGNED user INT,
    PRIMARY KEY(theme, user),
    FOREIGN KEY(theme) REFERENCES theme(id),
    FOREIGN KEY(user) REFERENCES user(id)
);
insert INTO user(content_name) VALUES ("Rihyette")
INSERT INTO theme(content_name)
VALUES ("work"),
    ("personal");
INSERT INTO user_theme(theme,user) VALUES (1,1)(2,1);
INSERT INTO category(content_name, theme)
VALUES ("Global Dev", 1),
("Javascript", 1);
("PHP", 1);
("Media",2);
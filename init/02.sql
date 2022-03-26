CREATE TABLE user(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(64) NOT NULL
);
CREATE TABLE theme(
    id INT UNSIGNED AUTO_INCREMENT,
    user INT UNSIGNED,
    content_name VARCHAR(128) NOT NULL,
    PRIMARY KEY(id,user),
    FOREIGN KEY(user) REFERENCES user(id)
);
CREATE TABLE category(
    id INT UNSIGNED AUTO_INCREMENT,
    theme  INT UNSIGNED,
    content_name VARCHAR(128) NOT NULL,
    PRIMARY KEY(id, theme),
    FOREIGN KEY (theme) REFERENCES theme(id)
);
CREATE TABLE link(
    id  INT UNSIGNED AUTO_INCREMENT,
    category  INT UNSIGNED,
    link TEXT NOT NULL,
    content_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id, category),
    FOREIGN KEY (category) REFERENCES category(id)
);

CREATE TABLE
    webpage_user(
        id VARCHAR(255),
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        phone VARCHAR(255) UNIQUE NOT NULL,
        details TEXT,
        PRIMARY KEY (id)
    );


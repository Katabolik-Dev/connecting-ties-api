CREATE TABLE news(
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    title VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    content VARCHAR,
    image_link VARCHAR,
    image_description VARCHAR
);

INSERT INTO news (title, description, content, image_link, image_description) VALUES (
    'Test Image for React',
    'This is a test image for react',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur velit vitae mauris feugiat, vel rutrum dui molestie. Nulla facilisi.',
    'https://drive.google.com/file/d/15nOUvsKPWyNVt9ulbeLUliit7Q_CEiJr/view?usp=drive_link',
    'Image of Beluga Point near Girdwood, AK'
);
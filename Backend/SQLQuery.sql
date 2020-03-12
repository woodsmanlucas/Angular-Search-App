CREATE TABLE Person(
	person_id	INT PRIMARY KEY,
	person_name   VARCHAR(25),
	person_address  VARCHAR(140),
	intrests VARCHAR(140),
	age Integer,
	picture_url VARCHAR(300)
	)

INSERT INTO Person (person_name, person_address, intrests, age, picture_url) VALUES ('Chen, Jane', 'Vancouver', 'skiing, mountian biking', 28, 'https://images.pexels.com/photos/3905907/pexels-photo-3905907.jpeg?cs=srgb&dl=woman-in-white-shirt-and-blue-denim-shorts-holding-yellow-3905907.jpg&fm=jpg' );
INSERT INTO Person (person_name, person_address, intrests, age, picture_url) VALUES('Johnson, Jeff', 'Kamloops', '3d printing, mini painting, photography',  31, 'https://images.pexels.com/photos/3651814/pexels-photo-3651814.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
INSERT INTO  Person (person_name, person_address, intrests, age, picture_url)  VALUES('Rogers, Pam', 'Richmond', 'weighttraining, knife sharpening, cooking', 72, 'https://images.pexels.com/photos/3867213/pexels-photo-3867213.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
INSERT INTO  Person (person_name, person_address, intrests, age, picture_url)  VALUES('Singh, Baljeet', 'Seattle', 'botany, music, video games',  42, 'https://images.pexels.com/photos/1879876/pexels-photo-1879876.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
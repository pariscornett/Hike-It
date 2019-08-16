USE adventures;
INSERT INTO Users (userName, email, firstName, lastName, accessLevel,password,createdAt,updatedAt )
VALUES ("admin","admin@gmail.com","admin first","admin last","0",
"$2a$08$Sfl36KfCSu2WUwnWLGhXA.fyVtxfpZ2WQLIisb5kWOgoLNM2684pa", 
 CURDATE(),
 CURDATE()
);

INSERT INTO Trail (userName, trailName, trailAddress, trailCity, trailState, trailLength, trailDifficulty) VALUES ('Chris', 'Radnor Lake State Park', '1160 Otter Creek Rd', 'Nashville', 'TN',5,2);
INSERT INTO Trail (userName, trailName, trailAddress, trailCity, trailState, trailLength, trailDifficulty) VALUES ('Helen', 'Cummins Falls State Park', '390 Cummins Falls Ln', 'Cookeville', 'TN',4,4);

INSERT INTO Forum (personalName, email, itemlName, itemDescription, itemCity, itemState, itemPrice) VALUES ('Chris', 'chris@email.com', 'Skateboard', 'lots of ware, about to fall apart', 'Hendersonville', 'Tennessee', 20);
INSERT INTO Forum (personalName, email, itemlName, itemDescription, itemCity, itemState, itemPrice) VALUES ('Helen', 'helen@email.com', 'Mountain Bike', 'kept in great shape', 'Nashville', 'Tennessee', 400);
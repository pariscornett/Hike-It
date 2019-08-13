USE adventures;
INSERT INTO Users (userName, email, firstName, lastName, accessLevel,password,createdAt,updatedAt )
VALUES ("admin","admin@gmail.com","admin first","admin last","0",
"$2a$08$Sfl36KfCSu2WUwnWLGhXA.fyVtxfpZ2WQLIisb5kWOgoLNM2684pa", 
 CURDATE(),
 CURDATE()
);
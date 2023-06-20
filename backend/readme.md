//MEAN STACK
//
//express js server, node engine
// mongo database -> set it up and run mongod, if don't have root privilages, create a directory data/db where you do have privilages to r/w/ and start the mongod by passing --dbpath "directory" 
// mongoose used to connect to mongo, change the port in the file if mongo is running on a different port locally and database if needed, obviously accompanied by model changes too
//  
// run by running nodemon 
//
//
//stop mongo in ubuntu server - sudo systemctl stop mongod
//
// copy stuff into the ubuntu sever with a sc protocol
//pscp -i C:\Downloads\my-aws-key.ppk -r C:\Downloads\angular-8-registration-login-example\dist\* ubuntu@ec2-52-221-185-40.ap-southeast-2.compute.amazonaws.com:/opt/front-end
//
// mongo setup
//https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/
//
// mongo exit code fix https://stackoverflow.com/questions/60309575/mongodb-service-failed-with-result-exit-code

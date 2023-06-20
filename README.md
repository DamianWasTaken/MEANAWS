 MEAN STACK 
 
 Mongo db, express js server, angular, node engine 
 mongoose used to connect to mongo, change the port in the file if mongo is running on a different port locally and database if needed, obviously accompanied by model changes too 

 LOCALLY
 if running locally, build the front end first and fix the serve path in index.js in the backed end if your file structure will be different 
 run by running nodemon locally -> gonna run on localhost:3000 and will have frontend attatched to it (built in angular // though it's nothing complex)
 backend just a few apis interacting with mongo, connected and built models with mongoose -> front end only makes use of 2 of them (again, nothing complex, just working, can be easly built upon)
 
 
 AWS EC2
 will need to install Node, PM2, NGINX, mongodb
 copy backend and frontend into the ubuntu sever with a sc protocol 
 scp -i AWS-KEY -r localfiles ubuntu@CONNECTADDRESS:/opt/(PATH WHERE TO DROP WITHIN SERVER) ORRRRR clone repo directly ===== might need to 'sudo chown ubuntu:ubuntu "filepath you're using"' to be able to sc into it
 NOTE: we only need the build files for the frontend (static), might want to run this from it's own serve server on an actual production build , either way don't forget to fix the serve path in index.js
 npm i in back end , will install the dependencies needed such as express and mongoose

 if you've installed pm2 (production process manager) you should now be able to do pm2 start backend/index.js --name "name of your service" to get it up running => (pm2 stop/restart "name")

 this will fail because you don't have mongo running, can use mongo ATLAS to run a mongo server or install it locally
 follow this to install it in the ubuntu server => then run it
 mongo setup //https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/ 
 mongo exit code fix https://stackoverflow.com/questions/60309575/mongodb-service-failed-with-result-exit-code
 stop mongo in ubuntu server - sudo systemctl stop mongod 

 after this your server should work and connect to mongo on start, but still can't be acess from the outside to your ubuntu server
 after intalling NGINX (rerouter in this case) change etc/ ... can't remember the path ... / default to redirect all traphic to port 3000, check the syntax, restart and check the server status
 if all okay that should now be running and accessible from the public  

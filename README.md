# A template for nodejs, jwt and mongoDB authentication

## Details 
- I have used the collection name as users for storing data.
- The model used for registration and login can be found in Models directory
- The controllers consit of files which hae the buissness logic
- The route.js file consists of all the route configuration
- For production environement it will run with pm2 for development it will use nodemon

Add the following details in the .env.devlopment or .env.production file

DB_URI
DB_NAME
JWT_SECRET
JWT_EXPIRY


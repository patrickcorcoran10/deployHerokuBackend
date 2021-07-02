# deployHerokuBackend

Project Tasks
------------------
A. Database / Table setup
  1. Plan/Draw our db schema => 
    - what tables do we need (https://ondras.zarovi.cz/sql/demo/)
    -how will the data relate to each other
  2. Create our db 
    - schema file
    - create db in MySQL Workbench

B. Create package.json 
  2. Add dependencies
    - express
    - sequelize
    - mysql2
    - dotenv

C. Create files
  - .gitignore
  - server.js
  - /config 
    - connection
  - .env
  - Build the models for each table in code 
    - add datatype to column
    - add the foreign keys
  - Seed our database
    - create seed files

D. Establish routes
  - create /route-tests
  - create /routes

Database: cars
Tables:
  - owners  
  - cars
  - manufacturers
  - owners_cars
# APES S3D (A Pinoy Eagle Squad Sniper 3D)
---
## Getting Started
Clone the repository to your computer.
You'll also need the server and SQL data that is available within this same github repository.

## SERVER Getting Started
1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
  - username: `development`
  - password: `development`
  - database: `s3d`
3. Install dependencies: `npm i`
4. Create database finals using
  - `psql -U development`
  - `create database s3d;`
  - `c s3d;`
  - FOR postgresql v15+ do the command below
  - GRANT ALL ON SCHEMA public TO development;
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
6. Create account in `screenshotapi.net` and get the `API KEY`
7. Add TOKEN=`API KEY` in .env. See `.env.example`
8. Run the server without nodemon: `npm start`
9. Run the server with nodemon: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
10. Visit `http://localhost:8080/`
11. login: `12345@test.com` password: `1234`
[( back to top 🔺)](#apess3d)
---

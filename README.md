[![Netlify Status](https://api.netlify.com/api/v1/badges/95fcc7df-ca34-44cf-ba2c-704d7555e9ea/deploy-status)](https://app.netlify.com/sites/cdt-resourcecentre/deploys)

This project is part of the Collaborative Digital Training programme.<br>
A collaboration between Social Action for Health, Pursuing Independent Pathways, CAST and Founders & Coders.

---

## Problem Statement
This resource app is in development to make online learning more accessible. During a 6 week training programme to upskill charity staff in digital, we conducted a dual part programme of design sprints and build. 

Week 1: Discovery <br>
Week 2: Definition <br>
Week 3: Product Ownership <br> 
Week 4-6: Build and Testing <br>

This programme has been a collaboration between two distinct charities. Through the design sprints we found common problem areas that both could tackle with a single solution. Focusing on user groups with different needs, we worked towards developing an application that would ease the online experience of accessing sessions/resources provided by these charities. 

---
## The Application 

### Log in: 
Staff members for each charity have single user log in details, and participants can create their own account.

Staff are able to edit/add resources and sessions while participants can join their applicable session and view the resources uploaded by their charity. 

### Registration: 
The registration for participants requires the users to fill in their name (case sensitive), charity initials (lower case) and create a password.

---

## Tech Stack
ReactJS <br>
Netlify Lambdas <br>
Airtable <br>

---

## Developer Notes

This app has a React front-end using Netlify Lambda functions to talk to an Airtable database. It is set up to work as a PWA. Deployment is through netlify. Netlify holds the environment variables for Airtable on the account and are accessed in dev mode by Netlify CLI.

### Run in Dev mode

You will need Netlify CLI on your machine connected to the CDT organisation Netlify account. `netlify dev` will run the combined react app and netlify functions on localhost:8888.

`npm start` will run the react app alone, but won't have access to the database so most content will be missing.

`npm run build` Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

---

## Bugs:
Attempted to solve registration issue with no luck yet. 
Trying to maintain registration details after refresh/past Loading... 
TBC!

[![Netlify Status](https://api.netlify.com/api/v1/badges/95fcc7df-ca34-44cf-ba2c-704d7555e9ea/deploy-status)](https://app.netlify.com/sites/cdt-resourcecentre/deploys)

This project is part of the Collaborative Digital Training programme.<br>
A collaboration between Founders & Coders, CAST, Social Action for Health and Pursuing Independent Pathways.

---


## Developer Notes

This app has a React front-end using Netlify Lambda functions to talk to an Airtable database. It is set up to work as a PWA. Deployment is through netlify. Netlify holds the environment variables for Airtable on the account and are accessed in dev mode by Netlify CLI.

### Run in Dev mode

You will need Netlify CLI on your machine connected to the CDT organisation Netlify account. `netlify dev` will run the combined react app and netlify functions on localhost:8888.

`npm start` will run the react app alone, but won't have access to the database so most content will be missing.

`npm run build` Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.




//const Airtable = require("airtable");
const fetch = require("node-fetch");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const acceptedOrgs = "pip safh";

exports.handler = async (event) => {
  const { API_URL, AIRTABLE_API_KEY } = process.env;
  const credentials = JSON.parse(event.body);

  const password = credentials.password;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const url = `https://api.airtable.com/v0/appZmhWkwHSjmKw7g/users`;

  let status;

  // Airtable.configure({
  //   endpointUrl: API_URL,
  //   apiKey: AIRTABLE_API_KEY,
  // });

  //const base = Airtable.base("appZmhWkwHSjmKw7g");

  var userDetails = {
    username: credentials.username,
    organisation: credentials.organisation.toLowerCase(),
    password: hashedPassword,
  };

  if (!acceptedOrgs.includes(userDetails.organisation.toLowerCase())) {
    return {
      statusCode: 206,
      body: "Organisation not found",
      headers: {
        "cache-control": "Cache-Control: max-age=60, public",
        "Access-Control-Allow-Methods": "*",
      },
    };
  } else {
    //base("users").create(
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        fields: {
          username: userDetails.username,
          password: userDetails.password,
          organisation: userDetails.organisation,
          user_type: "participant",
        },
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    })
      .then((res) => {
        console.log("this is status", res.status);
        if (res.status === 200) {
          status = 200;
        }
      })
      .catch(function (error) {
        console.error(error);
        status = 400;
      });
  }
  if (status === 200) {
    return {
      statusCode: 200,
      body: "User successfully registered!",
      headers: {
        "cache-control": "Cache-Control: max-age=60, public",
        "Access-Control-Allow-Methods": "*",
      },
    };
  } else {
    return {
      statusCode: 400,
      body: "There was an error",
      headers: {
        "cache-control": "Cache-Control: max-age=60, public",
        "Access-Control-Allow-Methods": "*",
      },
    };
  }


};

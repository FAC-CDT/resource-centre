const Airtable = require("airtable");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const acceptedOrgs = ["pip", "safh"];

exports.handler = async (event, context, callback) => {
  const { API_URL, AIRTABLE_API_KEY } = process.env;
  Airtable.configure({
    endpointUrl: API_URL,
    apiKey: AIRTABLE_API_KEY,
  });

  const base = Airtable.base("appnkfsVctBYM5kva");

  const credentials = JSON.parse(event.body);

  const password = credentials.password;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  var userDetails = {
    username: credentials.username,
    organisation: credentials.organisation.toLowerCase(),
    password: hashedPassword,
  };

  //   if (!acceptedOrgs.includes(userDetails.organisation)) {
  //     const response = {
  //       statusCode: 406,
  //       body: "Organisation not found",
  //     };
  //     callback(null, response);
  //   } else {
  base("users").create(
    [
      {
        fields: {
          username: userDetails.username,
          password: userDetails.password,
          organisation: userDetails.organisation,
          user_type: "participant",
        },
      },
    ],
    function done(err) {
      if (err) {
        console.error(err);
        const response = {
          statusCode: 400,
          body: JSON.stringify({ message: "there was an error" }),
        };
        callback(null, response);
      } else {
        const response = {
          statusCode: 200,
          body: JSON.stringify({ message: "User registered" }),
        };
        callback(null, response);
      }
    }
  );
};
//};

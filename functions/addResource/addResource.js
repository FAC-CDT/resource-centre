const Airtable = require("airtable");

exports.handler = async (event) => {
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
      (err) => {
        if (err)
          return {
            statusCode: 400,
            body: "There was an error",
            headers: {
              "cache-control": "Cache-Control: max-age=60, public",
              "Access-Control-Allow-Methods": "*",
            },
          };
      }
    );

    return {
      statusCode: 200,
      body: "User successfully registered!",
      headers: {
        "cache-control": "Cache-Control: max-age=60, public",
        "Access-Control-Allow-Methods": "*",
      },
    };
  }
};
